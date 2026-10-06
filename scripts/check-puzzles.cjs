// Validate the real TypeScript catalog without needing a native renderer.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function loadData(filename) {
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  const localRequire = (request) => {
    if (request.endsWith('.png')) {
      assert.ok(fs.existsSync(path.resolve(path.dirname(filename), request)));
      return 1;
    }
    assert.ok(request.startsWith('.'), `Unexpected data dependency: ${request}`);
    return loadData(path.resolve(path.dirname(filename), `${request}.ts`));
  };
  vm.runInNewContext(compiled, { module, exports: module.exports, require: localRequire }, { filename });
  return module.exports;
}

const { puzzles, normalizeAnswer, isAcceptedAnswer } = loadData(path.resolve(__dirname, '../src/data/puzzles.ts'));
assert.equal(puzzles.length, 100, 'Catalog must contain exactly 100 puzzles');
assert.equal(new Set(puzzles.map((p) => p.id)).size, 100, 'IDs must be unique');
assert.equal(new Set(puzzles.map((p) => p.clue)).size, 100, 'Clues must be unique');
assert.equal(new Set(puzzles.map((p) => normalizeAnswer(p.acceptedAnswers[0]))).size, 100, 'Primary answers must be unique');
assert.equal(JSON.stringify(puzzles.slice(0, 9).map((p) => p.id)), JSON.stringify([
  'impasta', 'nacho-cheese', 'gummy-bear', 'sarah-sql-join', 'sarah-unix-sea',
  'sarah-that-hertz', 'sarah-positive-proton', 'sarah-neutron-charge', 'sarah-sodium',
]), 'Existing save indexes must remain stable');

for (const puzzle of puzzles) {
  assert.ok(puzzle.clue.trim(), puzzle.id);
  assert.ok(puzzle.acceptedAnswers.length > 0, puzzle.id);
  assert.equal(puzzle.hints.length, 3, `${puzzle.id}: three hints required`);
  assert.equal(new Set(puzzle.hints).size, 3, `${puzzle.id}: hints must differ`);
  assert.ok(puzzle.hints.every((hint) => hint.trim().length > 0), puzzle.id);
  for (const answer of puzzle.acceptedAnswers) {
    assert.ok(normalizeAnswer(answer).length > 0, puzzle.id);
    assert.ok(isAcceptedAnswer(puzzle, `  ${answer.toUpperCase()}!  `), puzzle.id);
  }
  assert.ok(!isAcceptedAnswer(puzzle, '   '), puzzle.id);
  assert.ok(!isAcceptedAnswer(puzzle, 'definitely not the answer 987654'), puzzle.id);
}
console.log('Validated 100 puzzles, unique IDs/clues/answers, hints, assets, answer variants, and original save order.');

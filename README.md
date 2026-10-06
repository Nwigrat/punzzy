# Pun Puzzle

A responsive TypeScript web game built with Expo Router and React Native Web. Play 100 local pun puzzles, type answers, reveal hints one at a time, and move on after solving. No account or backend is required.

## Run locally

Install Node.js 22.13 or newer, then:

```sh
npm ci
npm start
```

Open the localhost URL printed in the terminal. No phone or emulator is needed. Enter submits an answer; Tab moves between controls.

## Production build

```sh
npm run build
```

The generated `dist/` directory is a static website. Publish its contents to a static web host at the domain root. Build command: `npm run build`; output directory: `dist`. Build output is ignored by Git. This is a browser app, not an offline-installable PWA.

## Game and storage

Six puzzles are adapted from [Sarah Withee's puns](https://github.com/geekygirlsarah/puns), with custom hints and answer variants. See [third-party attribution](THIRD_PARTY_NOTICES.md) and the [upstream MIT license](public/licenses/geekygirlsarah-puns.txt). Content is bundled locally; playing never calls GitHub.

The original nine puzzles live in `src/data/puzzles.ts`; 91 additional locally curated puzzles live in `src/data/extra-puzzles.ts`. Each new entry has a stable ID, clue, answer, two guiding hints, and optional answer variants. Its third hint reveals the answer. These additional entries are not imports from Sarah Withee's repository. All puzzles reuse `assets/puzzle-placeholder.png`. Answer matching ignores case, spaces, and punctuation. Append new puzzles to preserve index-based saves.

Progress (current puzzle, hints, solved state) is stored locally in the browser using AsyncStorage's web implementation. Reloading keeps it; clearing browser site data removes it. Different browsers and site addresses have separate saves. Typed drafts are not saved.

## Checks

```sh
npm run lint
npm run typecheck
npm run test:puzzles
npm run build
```

GitHub Actions runs these checks on pushes and pull requests.

Manual check: submit an incorrect answer, reveal a hint, reload, solve with `AN IM-PASTA!`, reload again, then advance. The next eight answers are `nacho cheese`, `gummy bear`, `can I join you`, `C`, `that hertz`, `I'm positive`, `no charge`, `Na`. A previously completed save should now unlock Next puzzle and continue into the added collection. Puzzle 100 accepts `parallel`; solving it should offer Play again.

## Push to your repository

The current branch is `master`. The remote `origin` is configured locally as `https://github.com/Nwigrat/punzzy.git`. Push with:

```sh
git push -u origin master
```

If changes have not yet been committed, stage and commit them before pushing. Authentication uses your own Git credentials; never store tokens in the repository. Dependencies, builds, local environment files, and Expo caches are ignored.

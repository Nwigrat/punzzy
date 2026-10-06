# Pun Puzzle

A responsive TypeScript web game built with Expo Router and React Native Web. Play three local pun puzzles, type answers, reveal hints one at a time, and move on after solving. No account or backend is required.

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

Edit `src/data/puzzles.ts` for clues, accepted answers, hints, and local images. The puzzles currently reuse `assets/puzzle-placeholder.png`. Answer matching ignores case, spaces, and punctuation.

Progress (current puzzle, hints, solved state) is stored locally in the browser using AsyncStorage's web implementation. Reloading keeps it; clearing browser site data removes it. Different browsers and site addresses have separate saves. Typed drafts are not saved.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs these checks on pushes and pull requests.

Manual check: submit an incorrect answer, reveal a hint, reload, solve with `AN IM-PASTA!`, reload again, advance and solve `nacho cheese` and `gummy bear`, then select Play again.

## Push to your repository

The current branch is `master`. The remote `origin` is configured locally as `https://github.com/Nwigrat/punzzy.git`. Push with:

```sh
git push -u origin master
```

If changes have not yet been committed, stage and commit them before pushing. Authentication uses your own Git credentials; never store tokens in the repository. Dependencies, builds, local environment files, and Expo caches are ignored.

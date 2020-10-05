# Nick Rook's Personal Website https://rooknj.com

<!-- [![Build Status](https://travis-ci.org/Rooknj/prysma-ui.svg?branch=master)](https://travis-ci.org/Rooknj/prysma-ui) -->
<!-- [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) -->

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<!-- [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) -->

## Developing

### Built With

- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js)

### Prerequisites

- Nodejs v10.3 or later is required as this project uses [Next.js](https://nextjs.org/docs/getting-started) (Check by running `node -v`)
- Yarn (Check by running `yarn -v`)

### Setting up Dev

```
git clone https://github.com/Rooknj/personal-website.git
cd personal-website
yarn install
yarn start
```

### Testing

Tests are written using [Jest](https://jestjs.io/)

Run tests once:

```
yarn test
```

Run tests on watch mode:

```
yarn test --watch
```

Run tests with coverage:

```
yarn test --coverage
```

### Building

Create Production Bundle (outputs to /.next)

```
yarn build
```

<!-- ### Deploying

Deployments happen automatically using Semantic-Release based off of semantic commit messages -->

## Commit Messages

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org)

Example Messages

- chore(docs): updated Readme
- refactor: renamed X to Y
- fix(LightMessenger): fixed a bug where something wasn't working
- feat: Added ability to do cool new thing
- BREAKING CHANGE: Swapped database from Redis to Sqlite3

CI will fail if you do not use the correct commit format. Local messages are linted using [Commitlint](https://commitlint.js.org/#/)

Commitizen support coming soon

## Versioning

I use [SemVer 2.0.0](https://semver.org/) for versioning. To see available versions, check out the [releases page](https://github.com/Rooknj/personal-website/releases)

## Style Guide

### Linting

Linting is managed by [ESLint](https://eslint.org/)

Run `yarn lint` to check all files

Currently we are extending my custom eslint config [@rooknj/eslint-config](https://github.com/Rooknj/eslint-config-rooknj)

Any additional rules are added in [.eslintrc.js](/.eslintrc.js)

Note: The linter is ran during CI and the build will fail if there are any errors

### Code Style

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Code style is managed by [Prettier](https://prettier.io/)

All default prettier styles are enabled except for the overrides located in [.prettierrc.js](/.prettierrc.js)

Prettier is automatically ran on staged files every commit using [Husky](https://github.com/typicode/husky) and [Lint-Staged](https://github.com/okonet/lint-staged)

You can run prettier manually on every file through the command `yarn format` or you can set up prettier to run inside your IDE/Editor

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

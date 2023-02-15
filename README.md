# HELLA CO. - My First Next Project

Hella Co. is a sample fictional e-commerce platform for selling hair treatment products. It was created by [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on Vercel at [HELLA CO.](https://hella-co.vercel.app/)

To access Hella Co. Storybook, Please click here
[Storybook](https://hella-co-storybook.vercel.app/)

To access Hella Co. GitHub, Please click here
[GitHub](https://github.com/Supatsara-Rodratsa/next-project)

## Getting Started

To install and run Hella Co. locally, follow these steps:

First, run following command to install the required packages and run the server on local machine.

```bash
npm install
npm run dev
```

## Tools

### Prettier Setup

Prettier is a code formatter that automatically formats code to a consistent style across the project.

To install dependency, you can use the following command:

```bash
npm install --save-dev --save-exact prettier
```

To add Prettier config file to set rule across the project, you can use the following command:

```bash
echo {}> .prettierrc.json
```

To format all files with Prettier, you can use the following command:

```bash
npx prettier --write .
```

### ESLint Setup

ESLint is a static code analysis tool that can help catch potential errors, enforce consistent coding style, and promote best practices.

When you create a `Next` project using the `create-next-app` command, ESLint is included by default. During the project setup, you will be prompted to choose whether to install ESLint, and it is recommended that you choose `Yes` to install it.

To make ESLint and Prettier play nice with each other, you can use the following command:

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

After installing these packages, you should update your ESLint configuration file (`.eslintrc.json`) to extend the prettier configuration and ensure that `ESLint` and `Prettier` configurations work together smoothly, like so:

```bash
"extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
```

### GitHook Setup

`Husky` is a tool that allows you to easily create Git hooks, which are scripts that run before or after certain Git actions, such as committing or pushing changes to a repository.

`lint-staged` is a tool that works in conjunction with Husky to run scripts on files that are staged in Git. It allows you to run tasks, such as formatting or linting, on only the files that are about to be committed, instead of running them on the entire project.

In this project, `lint-staged` will be executed automatically every time a new commit is made.

To install dependency and add pre-commit, you can use the following command:

```bash
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

### JEST Test Setup

[JEST](https://blog.logrocket.com/testing-next-js-apps-jest/) is a popular testing framework for JavaScript that provides a robust and easy-to-use platform for writing and running tests.

To install dependency, you can use the following command:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

After installed dependencies, you will typically want to create a configuration file named `jest.config.js` at the root folder with following configuration.

```bash
const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
```

Next, adding Jest command in package json..

```bash
"test": "jest --watch"
```

### GitHub Action Setup

`GitHub Actions` is a powerful tool for automating tasks and workflows in your software development process.

In this project, I have two github workflow including `lint.yml` and `coverage.yml`

#### lint.yml

This workflow will be triggered whenever a new push or pull request is made to project.

#### coverage.yml

This workflow will be triggered after your code has passed the linting tests and is ready for more thorough testing.

## Storybook

`Storybook` is a user interface (UI) development environment and component explorer. It enables developers to create and showcase reusable components in isolation without having to navigate the entire application.

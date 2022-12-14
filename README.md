# 🔨 Smarty-UI 是什么?

一个 Mini 版的组件库，基于 Vite 栈。为需要学习前端工程化的同学搭建的组件库搭建教学模型。

<p align="center">
    <a href="https://github.com/xld1393679430/smarty-ui-vite/actions/workflows/main.yaml">
        <img src="https://github.com/xld1393679430/smarty-ui-vite/actions/workflows/main.yaml/badge.svg" />
    </a>
</p>

## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
npm i smarty-admin-ui
```

## Quick Start

```js
import Vue from "vue";
import SmartyUI from "element-ui";

const App = {
  template: `
                <SButton/>
            `,
};

createApp(App).use(SmartyUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.

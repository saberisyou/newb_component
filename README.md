# 前端商城组件 React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

### 在src/component中开发组件

```js
// src/Search.tsx 
import React from "react";
import "./styles.less";

const Search: React.FC = (props: any) => {
  return (
    <div>
      {props.name}
      <input type="text" placeholder="Search..." className='Search'/>
      <button>Search</button>
    </div>
  );
};

export default Search;
```

### 在src/index中导出组件

```js
import Search from "./component/Search";
import Login from "./component/Login";

export { Search, Login };
```

### 构建

```js
pnpm run build
```

### 修改package.json的版本
```js
  //这个值每次不可以相同
  "version": "0.1.2"
```

### 推送
```js
  npm login
  npm publish 

 //在CDN引用时,注意升级新的包版本
```

## 使用方式，具体使用如下

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 MyReactComponents</title>
    <!-- 引入 React 和 ReactDOM -->
    <script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/newb_component/dist/newb_component.css" />
    <!-- 引入您的组件库 -->
    <script type="module" th:inline="javascript">
      import Newbee,{Card,render} from "https://unpkg.com/newb_component@latest/dist/my-react-components.es.js";
      const newGoodses = [[${newGoodses}]];
      console.log(newGoodses);
      console.log(Newbee);
      render(document.getElementById('Login'),Card.Card3,{list:newGoodses,title:"yueyue"})
    </script>
  </head>
  <body>
    <div id="Login"></div>
  </body>
</html>
```

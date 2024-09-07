// 整个项目的入口，从这里开始运行


// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

//导入项目的根组件
import App from './App';
// import reportWebVitals from './reportWebVitals';


// 把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// jsx 本质：把HTML标记语言，转换为createElement 形式再渲染；
// 定义：一种 JavaScript 的语法扩展，但比HTML要严格的XML语法；

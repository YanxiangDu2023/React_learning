// 项目的根组件， App.js被引入到了index.js，然后渲染到了public的index.html(root)

// import logo from './logo.svg';
// import './App.css';

import { useState } from "react"

const list = [
  {id:1001, name:"Vue"},
  {id:1002, name:"React" },
  {id:1003, name: "Angular"}
]



const count =100



const isLogin = true

function getName(){
  return 'jack'
}

const articleType =1  // 0,1,2,3

function getArticleTem () {
  if (articleType === 0) {
    return <div>我是无图文章</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}



// 定义组件
const Button=() =>{
// 业务逻辑组件逻辑
  return <button>click me!</button>

}





function App() {

  //  {/* 事件处理函数 */}

  // const handleClick = ()=>{
  //   console.log("button 被点击了")
  // }
// handleClick 是一个事件处理函数，它定义了按钮被点击时执行的操作。



// 事件参数e
const handleClick = (e)=>{
  console.log("button 被点击了",e)
}

// * 在 React 中，事件对象 e 是 合成事件（SyntheticEvent），它是对浏览器原生事件的封装，提供了跨浏览器的兼容性。 */}


// 传递自定义参数
const ClickHandler = (name)=>{
  console.log("button被点击了",name)
}


// 既要传递自定义参数，还要事件对象e

const ClickHandler2 = (name,e)=>{
  console.log("button 被点击了",name,e)
}


// UseState 实现一个计数器按钮
// 1. 调用useState添加一个状态变量
// 2.count 状态变量
// 3. setCount 修改状态变量的方法

const [count, setCount] = useState(0)


// 2. 点击事件回调
const handleClick3 = () =>{

  // 作用：1.用传入的新值修改count
  // 2.重新使用count渲染UI
  // 直接修改count+1无法引发视图更新
  setCount(count+1) 

}


// 修改对象状态

const [form, setForm] = useState({name:"jack"})


// useState({ name: "jack" }):
// useState 是 React 的 Hook，用于在函数组件中定义和管理状态。
// 这里 useState 的初始值是一个对象 { name: "jack" }，意味着 form 对象的初始值为 { name: "jack" }，其中 form.name 为 "jack"。
// form 是状态变量，保存表单的当前状态。
// setForm 是一个函数，用于更新 form 的值。


const changeForm = () =>{
  setForm({
    ...form, // 保留 form 对象中已有的属性
    name:"John" // 更新 name 属性为 "John"

  })

}
// 使用新值替代老值
// changeForm 函数：
// 这个函数是按钮的点击事件处理器。它调用 setForm 来更新 form 的状态。
// setForm({...form, name: "John"}) 的作用是：
// ...form：保留当前 form 对象中的所有属性（这在你有多个属性时尤为重要）。
// name: "John"：覆盖 form 对象中的 name 属性，将其更新为 "John"。
// 当 setForm 被调用后，React 会更新组件的状态，并且会触发组件的重新渲染，使得新的 form.name 在界面上显示出来



  return (
    <div className="App">
    this is App
    {/* 使用引号传递字符串 */}

    {'this is message'}

    {/* 识别js变量 */}
    {count}


    {/* 函数调用 */}
    {getName()}

    {/* 方法调用 */}
    {new Date().getDate()}

    {/* 使用js对象 */}
    <div style={{color:"red"}}>this is div</div>

    <ul>
      {list.map(item=><li>Vue</li>)}
      {/* list.map() 是 JavaScript 的数组迭代方法，用于对 list 数组的每个元素执行相同的操作，并返回一个新数组。 */}
      {/* 如果 list 数组中只有 3 个元素，例如：
      const list = [1, 2, 3];
      那么 list.map(item => <li>Vue</li>) 只会遍历这 3 个元素，生成 3 个 <li> 元素，因此页面上只会显示 3 次 Vue。 */}

      {/* 渲染列表 */}
      {/* map方法 循环哪个结构就return哪个结构
      注意：加上独一无二的key值，字符串或者number in
      key作用：react框架内部使用，提升性能 */}

      {list.map(item=><li key = {item.id}> {item.name} </li>)}


    </ul>

    {/* 实现基础条件渲染 */}

    {/* 逻辑与&& */}
    {isLogin && <span>this is span</span>}
    {/* 三元运算 */}
    {isLogin? <span>jack</span> : <span>loading...</span> }

    {/* condition ? expr1 : expr2
如果 condition 为 true，则执行并返回 expr1；
如果 condition 为 false，则执行并返回 expr2。 */}

 {/* 调用函数渲染不同的模版 */}
 {getArticleTem()}



 <button onClick ={handleClick}> Click me </button>
{/* 
 这是 JSX 中定义的按钮，显示文字为 "Click me"。
onClick={handleClick} 绑定了按钮的点击事件。当用户点击按钮时，浏览器会触发 onClick 事件，调用 handleClick 函数。 */}

{/* 当用户点击按钮时，onClick 事件被触发。
handleClick 函数被调用，控制台输出 "button 被点击了"。 */}






{/* 传递自定义参数 */}
<button onClick = {() => ClickHandler("jack")}>click me</button>

{/* 2. 没有箭头函数时会发生什么：
如果写成 onClick={ClickHandler("jack")}：
ClickHandler("jack") 会在组件渲染时立即执行，等于说它会立刻被调用，而不是等待用户点击按钮。
这会导致页面加载时就调用了 ClickHandler 函数，而不是在点击按钮时调用。
3. 箭头函数的作用：
() => ClickHandler("jack") 表示一个 匿名函数：
当用户点击按钮时，才会执行箭头函数的代码，进而调用 ClickHandler 函数。
它允许你传递参数（如 "jack"）给 ClickHandler，但不会提前执行。 */}



{/* 传递自定义参数 */}
<button onClick = {(e) => ClickHandler2("jack")}>click me 2</button>


{/* 使用组件（渲染组件） */}
{/* 自闭和 */}
<Button/>
{/* 这种写法称为自闭合标签。它意味着该组件不包含子元素，只是单纯地渲染自身的内容。 */}

{/* 自闭合标签 (<Button />)：简洁，适用于没有子元素或内部内容的组件。
成对标签 (<Button></Button>)：适用于需要传递子元素或可变内容的情况，使用 props.children 可以让组件内容更加灵活。 */}

{/* 成对标签 */}
<Button></Button>



<button> {count}</button>
<button onClick ={handleClick3}>{count}</button>

{/* 由于 状态是共享的，第一个按钮和第二个按钮都依赖于相同的 count 状态。当你点击第二个按钮时，count 增加，这会触发 整个组件的重新渲染。 */}


<button onClick={changeForm}>修改 form {form.name}</button>


  </div>
  )
}

export default App;

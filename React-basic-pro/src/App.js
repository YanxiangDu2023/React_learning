import './App.scss'
import avatar from './images/bozai.png'
import _ from "lodash"
import classNames from 'classnames';

// 评论列表数据
const List = [
  {
    rpid: 3,
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    content: '哎哟，不错哦',
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
];

// 当前登录用户信息
const user = {
  uid: '30009257',
  avatar,
  uname: '黑马前端',
};

// 当前评论列表数据里的uid和当前登录用户信息

// 导航Tab数组
const tabs = [
  {type:"hot",text:"最热"},
  {type:"time",text:"最新"},


]






// 应用组件
const App = () => {
  const [commentList, setCommentList] = useState(_.orderBy(List,"like","desc"));
  // 默认排序
  


//   1. useState(List)
// useState 是 React 中用于定义和管理状态的 Hook。它接收一个初始值，并返回一个包含两个元素的数组：

// 第一个元素是当前状态的值（即 commentList）。
// 第二个元素是一个函数，用于更新状态（即 setComment）。
// useState(List) 的作用是：

// List 是你定义的评论数据，它被作为初始值传给 useState。
// commentList：保存当前评论列表的状态，初始值为 List 数组。
// setCommentList：是更新评论列表状态的函数。当你想修改或更新 commentList 时，你会调用 setCommentList。
// 2. const [commentList, setCommentList]
// commentList：这个变量保存了当前组件中评论列表的状态。在初次渲染时，它的值是 List，也就是你的默认评论数据。你可以通过这个变量在 UI 中访问和渲染评论列表。
// setCommentList：这个函数用于更新 commentList 的状态。你可以在某些操作（如添加、删除评论）后调用 setComment 来更新状态。调用 setCommentList 会触发组件重新渲染，更新后的评论列表会重新显示在 UI 中。

// 2. 删除

const handleDel = (id)=>{
  console.log(id)
  // 对commentList做过滤处理
  SetCommentlist(commentList.filter(item=>item.rpid !==id))
}

// commentList.filter(item => item.rpid !== id): 这行代码对 commentList 数组进行过滤，移除 ID 等于传递给函数的 id 的评论。

// commentList: 当前的评论列表。

// .filter(item => item.rpid !== id): filter 方法创建一个新数组，其中包含所有 item.rpid 不等于 id 的评论。即，过滤掉 rpid 等于 id 的评论。
// item.rpid: 假设这是评论对象的属性，用于存储评论的 ID。
// SetCommentlist(...): 这是一个状态更新函数（通常通过 useState 钩子获取）。它将过滤后的新数组作为参数，更新 commentList 的状态。

// 整体功能
// 接受 ID: handleDel 函数接受一个评论的 ID，这个 ID 指定了要删除的评论。

// 打印 ID: console.log(id) 打印要删除的评论 ID，方便调试和验证。

// 过滤评论列表:

// 使用 filter 方法创建一个新的评论列表，移除 ID 匹配的评论。
// filter 方法返回一个新数组，包含所有 item.rpid 不等于 id 的评论。
// 更新状态:

// 调用 SetCommentlist 更新评论列表状态，将新的过滤后的评论列表设置为 commentList。
// 更新状态会导致组件重新渲染，页面上显示的评论列表将不再包含被删除的评论。



// -----------------------------------------------------------------------------------------------

// Tab切换功能
// 1.点击谁，就把谁的type记录下来
// 2.通过记录的type和每一项遍历的type做匹配，控制激活类名的显示

const [type,setType]=useState("hot")

// type: 当前选中的标签类型，初始化为 "hot"。
// setType: 更新 type 状态的函数。

// 使用 useState 钩子定义了一个状态变量 type，初始值为 "hot"。
// setType 是一个状态更新函数，用于更新 type 的值。


// 事件处理函数
const handleTabChange = (type)=>{
  console.log(type)
  setType("hot")
// handleTabChange 是一个事件处理函数，当用户点击标签时调用。
// console.log(type): 输出传入的 type 到控制台，用于调试。
// setType(type): 更新状态 type 为点击的标签的类型。

if (type === "hot"){
  // 根据点赞数量排序
  // lodash
  setCommentList(_.orderBy(commentList,"like"),"desc")

}else {
  // 根据创建时间排序
  setCommentList(_.orderBy(commentList,"ctime"),"desc")


}

// 使用 lodash 库中的 orderBy 函数来进行排序。
// _.orderBy(commentList, "like", "desc") 的意思是：
// commentList：要排序的数组。
// "like"：排序依据的字段，也就是评论对象中的 like 属性。
// "desc"：表示降序排列（从大到小）。


}





  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            <span className="total-reply">{commentList.length}</span>
          </li>
          <li className="nav-sort">





            {/* 高亮类名 active */}
            {tabs.map(item => (
  <span
    key={item.type}
    onClick={() => handleTabChange(item.type)}  // 使用箭头函数包裹
    // className={`nav-item ${type === item.type ? "active" : ""}`}
    className = {classname("nav-item", {active:type === item.type})}
  >
    {item.text}
  </span>
))}

</li> {/* 这里缺少的闭合标签 */}
      </ul>
    </div>



{/* tabs.map: 遍历 tabs 数组，为每个标签创建一个 <span> 元素。
key={item.type}: 为每个 <span> 元素设置唯一的 key 属性，帮助 React 高效地更新和渲染列表。
onClick={() => handleTabChange(item.type)}: 为每个 <span> 元素添加 onClick 事件处理器，点击时调用 handleTabChange 函数，传入标签的类型。
className={nav-item ${type === item.type ? "active" : ""}}: 动态设置 <span> 元素的 className。如果当前 type 与标签的类型匹配，添加 "active" 类名，下面的{item.text}实现高亮，否则不添加。
{item.text}: 渲染标签的显示文本。 */}

{/* ${} 是在模板字面量中插入表达式的语法。在你的例子中，${} 用于在 className 中动态插入一个类名。这种方式允许你在字符串中嵌入变量值、表达式或计算结果。 */}

{/* className={nav-item ${type === item.type ? "active" : ""}}:
nav-item 是字符串的一部分，它始终会被添加到 className。
${type === item.type ? "active" : ""} 是一个表达式，插入在 nav-item 后面。这个表达式会检查 type 是否等于 item.type：
如果条件为 true，插入 active，使 className 为 nav-item active。
如果条件为 false，插入一个空字符串，使 className 仅为 nav-item。 */}

{/* .nav-item.active {
//   color: #18191c;
// }




-------{/* 动态 className:

className={nav-item ${type === item.type ? "active" : ""}} 是一个动态的 className 属性，使用了模板字符串来实现。
nav-item 是一个基础样式类，所有标签都将应用这个样式。
${type === item.type ? "active" : ""} 是一个条件表达式，根据条件决定是否添加 "active" 类名。
条件表达式:

type === item.type: 这是一个条件检查，判断当前的状态 type 是否等于标签的类型 item.type。
如果条件为 true，即当前选中的标签类型匹配，则返回 "active"，下面的{item.text}实现高亮
如果条件为 false，即当前选中的标签类型不匹配，则返回空字符串 ""。
高亮效果的实现
标签列表的渲染:



整个过程

如果当前选中的 type 和遍历过程中的 item.type 匹配，那么遍历过程中渲染的 item 就会应用高亮样式。这个流程可以分解为以下几个步骤：

1. 点击事件处理：
用户点击某个标签时，handleTabChange 函数被触发。
函数会更新 type 状态为当前点击的标签的 type 值。

2。组件重新渲染：
状态 type 更新后，组件会重新渲染。
在渲染过程中，tabs.map 遍历每个标签，并生成相应的 <span> 元素。

3.动态类名计算：
在渲染每个 <span> 元素时，通过模板字面量（例如 className={`nav-item ${type === item.type ? "active" : ""}`}）动态计算 className。
${type === item.type ? "active" : ""}：根据当前的 type 和 item.type 的比较结果来决定是否添加 active 类。
如果 type 和 item.type 匹配，className 中包含 active，该标签会被高亮显示。
如果不匹配，则 className 只有 nav-item，该标签没有高亮效果。


-------- but更好的做法是：Classname工具化类名控制


classname 函数的作用是根据给定的条件，动态地生成完整的 className 字符串。
nav-item 始终存在，因为它是基础类。
active 类名是否存在，取决于 type === item.type 的结果，这决定了是否给当前元素应用高亮样式



            <span className='nav-item'>最新</span>
            <span className='nav-item'>最热</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea className="reply-box-textarea" placeholder="发一条友善的评论" />
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>

        {/* 评论列表 */}



        <div className="reply-list">

          {commentList.map(item => (

// map 函数： 遍历 commentList（这是一个包含评论的数组）。
// item： 每次迭代时，item 是数组中的一个对象，代表单条评论的数据（包括评论的内容、用户信息、时间、点赞数等）。
// 2. <div key={item.rpid} className="reply-item">
// key={item.rpid}： key 是 React 渲染列表时必须的属性，用来唯一标识列表中的每个元素。这里用评论的 rpid 作为唯一标识。
// className="reply-item"： 为这个 div 元素设置样式类名，可能用于 CSS 样式定义。

// 遍历了 commentList（即 List 中的评论数据），并为每个评论生成对应的 HTML 结构和样式，用于在页面上展示。通过遍历每个评论的内容、用户头像、用户名等字段，将它们逐一渲染在页面上，同时为它们添加样式和功能（例如删除按钮）。


            <div key={item.rpid} className="reply-item">


              {/* 头像 */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" alt="" src={item.user.avatar || avatar} />
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>

                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">{item.ctime}</span>
                    <span className="reply-like">点赞数: {item.like}</span>
                    

                    {/* 条件 user.id === item.user.id */}
                    {/* 这是一个 JSX 注释，它不会被渲染到页面上。注释的内容是对代码逻辑的解释，告诉开发者接下来的条件是什么。 */}
                    {user.id === item.user.id &&
                    <span className ="delete-btn" onClick={()=> handleDel(item.rpid)}>
                      删除

                      {/* <span className="delete-btn"> 删除 </span>: 这是要渲染的 JSX 元素。
                      如果条件 user.id === item.user.id 为 true，这个 <span> 元素就会被渲染到页面上。也就是我们只能删除自己的评论，如果条件为 false，则不会渲染任何内容。 */}
                      {/* onClick={() => handleDel(item.rpid)}: 这是一个箭头函数，它在点击事件触发时调用 handleDel 函数，并将 item.rpid 作为参数传递给它。 */}


                      </span>}
                    







                  </div>
                </div>


              </div>
            </div>
          ))}


        </div>
      </div>
    // </div>

        
        )
};


export default App;

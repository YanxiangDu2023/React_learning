// import logo from './logo.svg';
import './App.css';
import "./index.css";

const style ={
  color:"red",
  fontSize: "50px"
}



function App() {
  return (
    <div>

      {/* 行内样式控制 */}
      <span style = {style}>This is span</span>

      {/* 通过class类名控制 */}
      <span className='foo'>This is class foo</span>

      
      
    </div>
  );
}

export default App;

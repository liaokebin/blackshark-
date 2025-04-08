import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>BlackShark 项目初始化成功</h1>
      <p>你现在可以开始接入渗透监听、投注数据模块等功能。</p>
      <button onClick={() => setCount(count + 1)}>
        当前计数：{count}
      </button>
    </div>
  )
}

export default App
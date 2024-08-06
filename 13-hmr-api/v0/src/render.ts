import './style.css'

//即使是修改注释也会导致整个页面的全部渲染
//热更新的机制，Vite开发服务器使用Node.js的文件系统的API（fs.watch）或者其他的监听工具，监控文件的更改。检测到相应的变化就通过websocket推送消息到浏览器，浏览器收到通知，会进行相应的操作。
// if(import.meta.hot){
//   //仅在开发模式下 也只会在。生产模式下会被删除代码优化
//   import.meta.hot.accept((mod)=>{mod.render()})
  
// }

export const render = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <h1>Hello Vite!</h1>
    <p target="_blank">This is hmr test 1</p>
  `
}
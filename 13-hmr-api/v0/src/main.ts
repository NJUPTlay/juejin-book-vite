import { render } from './render';
import { initState } from './state';

// if (import.meta.hot) {
//     import.meta.hot.accept('./render.ts', (content) => {
//         content.render()
//     })
// }
render();
initState();

if (import.meta.hot) {
    import.meta.hot.accept(['./render.ts', './state.ts'], (modules) => {
        const [renderModule, stateModule] = modules
        if (renderModule) {
            console.log(renderModule);
            //负责页面UI的更新，是无状态的,不会出现副作用。每次调用 render() 函数时，它会重新渲染 DOM 元素，但不会留下持久的副作用。
            renderModule.render()
        }
        if (stateModule) {
            console.log(stateModule);
            //状态管理涉及到副作用，如计时器、事件监听等。如果这些副作用没有被正确清理，可能会导致重复计时器或其他意外行为。所以在下次实例化之前必须要清除不必要的副作用
            //会重新执行，所以需要管理一下上次的状态
            stateModule.initState()
        }
    })
}
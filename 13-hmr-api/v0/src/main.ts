import { render } from './render';
import { initState } from './state';

if (import.meta.hot) {
    import.meta.hot.accept('./render.ts', (content) => {
        content.render()
    })
}


render();
initState();
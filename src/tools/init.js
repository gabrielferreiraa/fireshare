import { style } from 'style/default';
import registerServiceWorker from 'registerServiceWorker';

export const initApp = () => {
    style();
    registerServiceWorker();
}
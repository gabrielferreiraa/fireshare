import { style } from "style/default";
import registerServiceWorker from "registerServiceWorker";

const initApp = () => {
    style();
    registerServiceWorker();
};

export default initApp;

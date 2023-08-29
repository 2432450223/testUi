import tButton from "./button/index.js";
import tInput from "./input/index.js";
const install = app =>{
    app.use(tButton)
    app.use(tInput)
};

const UI = {
    install
};

export { tButton,tInput };
export default UI;
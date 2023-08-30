import tButton from "./button/index.js";
import tInput from "./input/index.js";
import tFriend from "./friend_box/index.js";
const install = app =>{
    app.use(tButton)
    app.use(tInput)
    app.use(tFriend)
};

const UI = {
    install
};

export { tButton,tInput,tFriend };
export default UI;
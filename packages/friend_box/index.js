import tFriend from './index.vue'
tFriend.install = app =>{
    app.component(tFriend.name,tFriend)
}
export default tFriend;
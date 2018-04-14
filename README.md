# bx
react-native项目

###一、使用到的模块

react
react-native
redux
react-redux
react-native-simple-store
react-sagas
react-navigation
[redux-logger]
###二、结构

1. store/
store 保存所有状态，通过actions触发reducer更新状态

actions/
reducer/
ActionTypes
index.js 入口
2. sagas/
sagas 异步处理 store

allApi/
index.js 入口
3. net/
net 网络请求，封装了fetch，需要修改成await,async

index.js
4. images/
images 存放图片资源

icon/ [小的通用icon]
logo/ [APP的logo]
static/[一些大的不变的资源，尽量使用网络资源]
favicon/[favicon]
5.config/
配置接口地址,还需要修改

6.containers/
页面组件入口文件夹,还需要修改

index.js 入口
7. components/
公共组件

8. pages/
页面

9.utils/
工具包

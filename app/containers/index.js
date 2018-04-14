/*!
 * @Date:2018-3-18
 * @Author:DIEW
 * 页面组件入口文件
 */

import {
  StackNavigator,
} from 'react-navigation';
import List from '../pages/list/index';
import Flex from '../pages/main/flex';
import MyInput from '../pages/main/input';
// import MainScreen from '../pages/main/index';

import MainScreen from './BidList';

/*
 * 创建StackNavigator
 * StackNavigator(RouteConfigs, StackNavigatorConfig);
 */
const App = StackNavigator({
  Main: {
    // `MainScreen` is a React component that will be the main content of the screen.
    screen: MainScreen,
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      //navigation 中
      title:"首页",//可以覆盖title
      // show:(function(){
      //  console.log("navigation",navigation);
      //   return ""}())
    }),
  },
  Profile: {
    screen: List,
    navigationOptions:{
      title:'列表页'
    }
  },
  Flex:{
    screen: Flex,
    navigationOptions:{
      title:'弹性盒'
    }
  },
  MyInput:{
    screen: MyInput,
    navigationOptions:{
      title:'表单'
    }
  },
});

export default App;

/*!
 * @Date:2018-3-18
 * @Author:DIEW
 * 页面组件入口文件
 */

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import List from '../pages/list/index';
import Flex from '../pages/main/flex';
import MyInput from '../pages/main/input';
import MainScreen from './BidList';

/*
 * 创建StackNavigator
 * StackNavigator(RouteConfigs, StackNavigatorConfig);
 */
export default StackNavigator(
  {
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
      title:'分类'
    }
  },
  Flex:{
    screen: Flex,
    navigationOptions:{
      title:'消息'
    }
  },
  MyInput:{
    screen: MyInput,
    navigationOptions:{
      title:'账号'
    }
  }
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        console.log(routeName);
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons

      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }

);

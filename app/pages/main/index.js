/*!
 * @Date:2018-3-18
 * @Author:DIEW
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
InteractionManager
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
// import MyImage from '../../components/myImage';
// import SplashScreen from 'react-native-splash-screen'
import EmptyView from './EmptyView';
import store from 'react-native-simple-store';

export default class HelloWorldApp extends Component{

   // static 该方法不会被实例继承， 而是直接通过类来调用， 这就称为“ 静态方法”。
  //navigationOptions 可以设置title，但是后面可以覆盖
    static navigationOptions = {
        title: '你好',
    };
    constructor(props){
      super(props);
      this.state = {
        id: "111",
        onRefresh:(id)=>{
          console.log("------onRefresh-------");
          console.log(id);
        },
        refreshing:true
      };
    }
    componentDidMount(){
        // do anything while splash screen keeps, use await to wait for an async task.
      
      // SplashScreen.hide();

      //输出当前的props，查看state和action是否绑定到props
      console.log("-----props-----");
      console.log(this.props);
      this.props.BidListActions.requestBidList({
        "token": '',
        "pageIndex": '1', //当前分页起始记录序号(必填)
        "pageSize": 3, //每页记录数(必填)
        "orderBy": '', // 排序规则 (可选)
        "queryType": 0, //查询类型：0-全部 1-推荐（必填）"
      });
      setTimeout(()=>{
        this.props.BidListActions.requestBidList({
          "token": '',
          "pageIndex": '5', //当前分页起始记录序号(必填)
          "pageSize": 3, //每页记录数(必填)
          "orderBy": '', // 排序规则 (可选)
          "queryType": 0, //查询类型：0-全部 1-推荐（必填）"
        });
      },4000)


    }
    render() {
      const { navigate} = this.props.navigation;
      const {typeList} = this.props.BidList;
        return(
          <View>
          <Text>{typeList}</Text>

          <EmptyView refreshing={this.state.refreshing} typeId={this.state.id} onRefresh={this.state.onRefresh} navigate={navigate}/>
           </View>
        );

    }
  }

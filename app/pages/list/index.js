/*!
 * @Date:2018-3-18
 * @Author:DIEW
 */
import React,{ Component } from 'react';
import {View,Text,Image,Button} from 'react-native';

class dataList extends Component{

    render(){
      const { navigate,goBack,state } = this.props.navigation;
        return (
            <View>
                <Text>nihao </Text>
                <Button title="返回" onPress={() => goBack()}   accessibilityLabel="Learn more about this purple button"/>
            </View>
        )
    }
};
export default  dataList;

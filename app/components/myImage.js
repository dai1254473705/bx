/*!
 * @Date:2018-3-18
 * @Author:DIEW
 */
import React, { Component } from 'react';
import { Image,Text,View } from 'react-native';

export default class Bananas extends Component {
    constructor(){
      super();
      console.log("-----");
      console.log(this.props);
    }
    render() {
      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      console.log(this.props);
      return (
        <View >
          <Text>{this.props.name}</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        </View>
      );
    }
  }
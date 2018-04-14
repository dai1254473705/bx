/*
 * buttons
 * 点击跳转
 */
 import React,{Component} from 'react'
 import {
   Button,
 } from 'react-native'

class MyButtons extends Component{
   constructor(props){
     super(props);
     // console.log("----get props ------");
     // console.log(props);

   }
   render(){
     const navigate= this.props.navigate;
     // console.log('this.props.navigate');
     // console.log(navigate);
     return (
       <Button
        onPress={() => navigate(this.props.nav, { name: this.props.title })}
        title={this.props.title}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     )
   }
 }
 export default MyButtons;

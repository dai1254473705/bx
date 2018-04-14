/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React, { Component } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions
} from 'react-native';
import MyButtons from '../../components/buttons'




export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  constructor(props){
    super(props);
    // console.log("-----",this.props.navigate);
    this.buttons_list = [
      {
        'title':'弹性盒',
        'nav':'Flex'
      },
      {
        'title':'首页',
        'nav':'Main'
      },
      {
        'title':'表单',
        'nav':'MyInput'
      }
    ]
  }


  buttonss = (buttons_list)=>{
    return buttons_list.map((item)=>{
     return <MyButtons title={item.title} nav={item.nav} key={item.title} navigate = {this.props.navigate}/>
     }
   )}
  render() {
      return(
        <ScrollView>
        {this.buttonss(this.buttons_list)}
        </ScrollView>
    )
  }
};

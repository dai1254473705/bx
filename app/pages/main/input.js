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
  View,
  TextInput,
  Dimensions
} from 'react-native';

export default class TextInputs extends Component {
  constructor(props) {
     super(props);
     this.state = {text: 'ghbh'};
  }

    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here to translate!"
            onChangeText={(text) => {
              let subr_str = text.substr(0,4);
              this.setState({text:subr_str});
            }}
            defaultValue={this.state.text}
          ></TextInput>
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>
      );
    }
}
let scale = Dimensions.get('window').scale ;
// console.log(scale);
const styles = StyleSheet.create({
  textInput:{
    borderLeftWidth: 1 * 2 / scale ,
       borderLeftColor: '#000000',
       borderRightWidth: 1 * 2 / scale ,
       borderRightColor: '#000000',
       borderTopWidth: 1 * 2 / scale ,
       borderTopColor: '#000000',
       borderBottomWidth: 1 * 2 / scale ,
       borderBottomColor: '#000000',
       borderWidth: 1 ,
  }
});

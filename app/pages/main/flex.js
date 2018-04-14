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
  View
} from 'react-native';

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.flexContent}>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.self}>1</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flexContent:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems:'flex-start',
    alignContent:'flex-start'
  },
  flexItem:{
    flexGrow:0,
    flexShrink:0,
    flexBasis:'33.33%',
    alignSelf:'center',
    color: '#000',
    height:100,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor:'#fefefe',
    justifyContent: 'center',
    alignItems:'center'
  },
  self:{

  }
});

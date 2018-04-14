/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app/containers/index';
import Store from './app/store/index';
import Sagas from './app/sagas/index';
import SplashScreen from 'react-native-splash-screen'

const store = Store();
// run root saga
store.runSaga(Sagas);

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

/**
 * 暂时没修改
 *
 */
import React from 'react';
import { connect } from 'react-redux';
// import CodePush from 'react-native-code-push';//热更新
import { bindActionCreators } from 'redux';
import Main from '../pages/MainPage/Main';
import * as readCreators from '../actions/read';

class MainContainer extends React.Component {



  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { read } = state;
  return {
    read
  };
};

const mapDispatchToProps = (dispatch) => {
  const readActions = bindActionCreators(readCreators, dispatch);
  return {
    readActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


/*!
 * 获取标的列表数据接口
 */

import * as types from '../ActionTypes'

const initialState = {
  type:''
};

export default function category(state = initialState, action) {
  console.log('-----------触发reducer 修改store----------------');
  console.log(action);
  switch (action.type) {
    case types.FETCH_BID_LIST:
      return Object.assign({}, state, {
        loading: true
      });
    case types.RECEIVE_BID_LIST:
      return Object.assign({}, state, {
        loading: false,
        typeList: action.typeList
      });
    default:
      return state;
  }
}

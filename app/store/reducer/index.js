/*!
 * @Date:2018-3-18
 * @Author:DIEW
 * 当前功能是通过combineReducers将多个reducer函数合成一个reducer函数，
 * 以便对reducer 调用 createStore。
 */
import { combineReducers } from 'redux';
import counter from './counter';
import text from './test';
import BidList from './BidList';

//将两个reducer连接
const rootReducer = combineReducers({
    counter,
    text,
    BidList
});
export default rootReducer;

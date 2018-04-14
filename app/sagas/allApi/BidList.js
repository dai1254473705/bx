/**
 *
 */
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../../store/ActionTypes';
import RequestUtil from '../../net/RequestUtils';
import ToastUtil from '../../utils/Toast';
import { PHJR_BID_LIST } from '../../config/Urls';
import { fetchBidList,receiveBidList } from '../../store/actions/BidList';

export function* requestBidList(pageIndex) {
  try {
    console.log("开始请求标的列表接口，设置当前状态为请求，出现loading");
    yield put(fetchBidList());
    //创建一条 Effect 描述信息，指示 middleware 调用 fn 函数并以 args 为参数。
    let url =  `${PHJR_BID_LIST}`;
    // const typeList = yield call(RequestUtil.request,url, 'post',opt);
    let typeList = pageIndex;
console.log("开始请求3");
    //创建一条 Effect 描述信息，指示 middleware 发起一个 action 到 Store。
    yield put(receiveBidList(typeList));
console.log("开始请求4");
    //将接口数据保存
    // yield call(store.save, 'BidList', typeList);
console.log("开始请求5");
    //判断数据是否正确并给出提示
    const errorMessage = typeList.retCode;
    // console.log(`${url}:${errorMessage}`);
    // if (errorMessage && errorMessage !== '') {
    //   yield ToastUtil.showShort(errorMessage);
    // }
  } catch (error) {
    yield put(receiveBidList([]));
    yield ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestBidList(opt) {
  while(true){
    //创建一条 Effect 描述信息，指示 middleware 等待 Store 上指定的 action。 Generator 会暂停，直到一个与 pattern 匹配的 action 被发起。
    console.log("暂停请求");
      const {pageIndex}=  yield take(types.REQUEST_BID_LIST);
      console.log("开始请求");
  console.log(pageIndex);
    //创建一条 Effect 描述信息，指示 midsdleware 以 无阻塞调用 方式执行 fn。
    yield fork(requestBidList,pageIndex);
  }
}

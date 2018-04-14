/**
 * 2018-3-19
 * @author:DIEW
 */
import { all, fork } from 'redux-saga/effects';
// import { watchRequestTypeList ,requestTypeList} from './saga';
import { watchRequestBidList} from './allApi/BidList';

export default function* rootSaga() {
  yield all([
        // fork(requestTypeList),
        // fork(watchRequestTypeList),
        fork(watchRequestBidList)
    ]);
}

import {
    call, put, takeLatest,
} from 'redux-saga/effects';
import Api from '../api/api';

// 工作的 Saga：當 action 是 USER_FETCH_REQUESTED 時被觸發
function* fetchUser() {
    try {
        const response = yield call(Api.fetchData);

        if (response.status === 200) {
            yield put({ type: 'SET_VISIBILITY_FILTER_SUCCEEDED', response });
        } else {
            yield put({ type: 'SET_VISIBILITY_FILTER_FAILED' });
        }
        // 在action觸發之後會經由yield call的呼叫api
        // api方面則是透過axios去取得資料
        // 把axios那邊取得的資料給return，這樣data這邊才會有資料
        // 然後在saga這邊透過put把資料給寫進reducer
    } catch (e) {
        yield put({ type: 'SET_VISIBILITY_FILTER_FAILED' });
    }
}

/*
  另外你也可以使用 takeLatest。

  但不允許同時取得使用者。當一個 fetch 已經在 pending 時，如果取得 dispatch「USER_FETCH_REQUESTED」，
  正在等待的 fetch 會被取消，只執行最新的發出的 USER_FETCH_REQUESTED。
*/
function* mySaga() {
    yield takeLatest('SET_VISIBILITY_FILTER', fetchUser);
}

export default mySaga;

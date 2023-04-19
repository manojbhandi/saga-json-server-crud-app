import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects'
import { loadUsersError, loadUsersStart, loadUsersSuccess } from './action'
import * as types from './actionTypes'
import { loadUserApi } from './api';


export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUserApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));

        }
    } catch (error) {
        yield call(loadUsersError(error.response.data))
    }
}

export function* onLoadusers() {
    yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

// fork methods maintains conscurrency for different sagas
const userSaga = [fork(onLoadusers)];


// root saga aggregates mulitple sagas to single entry point
export default function* rootSaga() {
    yield all([...userSaga]);
    // yield all(
    //     [
    //         call(onLoadusers)
    //     ]
    // )
}
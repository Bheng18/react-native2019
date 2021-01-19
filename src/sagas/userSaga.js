// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { FETCH_USERS_SUCCEED, FETCH_USERS_FAILED, FETCH_USERS } from '../actions/ActionTypes';
import { Api } from './Api';
//worker saga
function* fetchUsers(){
    try {
        const getUsers = yield Api.getUsersFromApi() 
        // Dispatch Action To Redux Store
        yield put({ type: FETCH_USERS_SUCCEED, users: getUsers });
    // console.log('get Users - userSaga', getUsers)
    } catch (error) {
        console.error(error)
        yield put({ type: FETCH_USERS_FAILED, error })
    }
}
// Watcher: Increase Counter Async
export function* watchFetchUsers() {
    console.log('watchers saga fecth')
    // Take Last Action Only
    yield takeLatest(FETCH_USERS, fetchUsers);
  };



// Imports: Dependencies
import { all, fork, call } from 'redux-saga/effects';
// Imports: Redux Sagas
// import { watchIncreaseCounter, watchDecreaseCounter } from './counterSaga';
import { watchFetchUsers } from './userSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield call(watchFetchUsers);
  // yield all([
  //   fork(watchIncreaseCounter),
  //   fork(watchDecreaseCounter),
  //   fork(watchFetchUsers),
  // ]);
};
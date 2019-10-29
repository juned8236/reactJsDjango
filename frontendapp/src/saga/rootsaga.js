import usersSaga from './userSaga';
import {all} from 'redux-saga/effects'

function* rootSaga(){
 return  yield all([
    usersSaga()
  ])
}

export default rootSaga;
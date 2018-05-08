import { all } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* helloSagas() {
  yield delay(1000);
  console.log('Hello Dmitriy, you are use redux-saga')
}
export default function* sagas() {
  yield all([
    helloSagas()
  ]);
}

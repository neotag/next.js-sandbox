import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { showHelloPage } from '../actions/hello';
import * as Action from '../actions/helloConstants';
import { getRandomMessage } from '../services/hello/randomMessage';

function* runShowHelloPage(action: ReturnType<typeof showHelloPage.start>) {
  const { sleep } = action.payload;

  try {
    const message = yield call(getRandomMessage, sleep);

    yield put(showHelloPage.succeed({ sleep }, { hello: { message } }));
  } catch (error) {
    yield put(showHelloPage.fail({ sleep }, error));
  }
}

export function* watchShowHelloPage() {
  yield takeLatest(Action.SHOW_HELLO_PAGE_START, runShowHelloPage);
}

export default function* rootSaga() {
  yield all([fork(watchShowHelloPage)]);
}

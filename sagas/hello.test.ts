// eslint-disable-next-line import/no-extraneous-dependencies
import { expectSaga } from 'redux-saga-test-plan';

import * as actions from '../actions/hello';
import reducer, { initialState } from '../reducer';
import { createIndex, messages } from '../services/hello/randomMessage';
import { watchShowHelloPage } from './hello';

describe('Hello Saga task', () => {
  const sleep = 10;
  const params = { sleep };

  // eslint-disable-next-line jest/expect-expect
  it('Hello Saga task', () => {
    const hello = {
      // randomMessage が返すのと同じ message をとってくる
      message: messages[createIndex(sleep)],
    };

    return (
      expectSaga(watchShowHelloPage)
        .withReducer(reducer)

        // action を明示的に dispatch
        .dispatch(actions.showHelloPage.start(params))

        // 最終的な state の比較
        .hasFinalState({ ...initialState, hello })
        .run()
    );
  });
});

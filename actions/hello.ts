import { Hello } from '../services/hello/models';
import * as ActionType from './helloConstants';

interface ShowHelloPageParams {
  sleep?: number;
}

interface ShowHelloPageResult {
  hello: Hello;
}

export const showHelloPage = {
  start: (params: ShowHelloPageParams) => ({
    type: ActionType.SHOW_HELLO_PAGE_START as typeof ActionType.SHOW_HELLO_PAGE_START,
    payload: params,
  }),

  succeed: (params: ShowHelloPageParams, result: ShowHelloPageResult) => ({
    type: ActionType.SHOW_HELLO_PAGE_SUCCEED as typeof ActionType.SHOW_HELLO_PAGE_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: ShowHelloPageParams, error: Error) => ({
    type: ActionType.SHOW_HELLO_PAGE_FAIL as typeof ActionType.SHOW_HELLO_PAGE_FAIL,
    payload: { params, error },
    // error: true,
  }),
};

export type HelloAction =
  | ReturnType<typeof showHelloPage.start>
  | ReturnType<typeof showHelloPage.succeed>
  | ReturnType<typeof showHelloPage.fail>;

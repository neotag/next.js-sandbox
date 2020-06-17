import { Reducer } from 'redux';

import { HelloAction } from './actions/hello';
import * as ActionType from './actions/helloConstants';
import { Hello } from './services/hello/models';

export interface HelloPageState {
  hello: Hello;
  isLoading: boolean;
  error?: Error | null;
}

export const initialState: HelloPageState = {
  hello: { message: '' },
  isLoading: false,
};

const helloPageReducer: Reducer<HelloPageState, HelloAction> = (
  state: HelloPageState = initialState,
  action: HelloAction,
): HelloPageState => {
  switch (action.type) {
    case ActionType.SHOW_HELLO_PAGE_START:
      return {
        ...state,
        hello: { message: '' },
        isLoading: true,
      };
    case ActionType.SHOW_HELLO_PAGE_SUCCEED:
      return {
        ...state,
        hello: action.payload.result.hello,
        isLoading: false,
      };
    case ActionType.SHOW_HELLO_PAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default helloPageReducer;

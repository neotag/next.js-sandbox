import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

import reducer from '../reducer';

import HelloPage from '../pages/hello/index';
import Index from '../pages/index';

it('renders Homepage unchanged', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders HelloPage unchanged with empty store', () => {
  // Provider がないと HelloPage が render できないので空の store を食わせている
  // store や saga task の変更などは検知しない
  const emptyStore = createStore(reducer);

  const tree = renderer
    .create(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={emptyStore}>
        <HelloPage defaultSleep={0} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

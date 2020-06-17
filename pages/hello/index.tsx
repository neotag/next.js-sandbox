import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Head from 'next/head';
import { showHelloPage } from '../../actions/hello';
import { HelloPageState } from '../../reducer';
import { Hello } from '../../services/hello/models';

interface StateProps {
  hello: Hello;
  isLoading?: boolean;
}

interface DispatchProps {
  showHelloPageStart: (sleep: number) => void;
}

type EnhancedHelloPageProps = StateProps & DispatchProps;

const mapStateToProps = (state: HelloPageState): StateProps => ({
  hello: state.hello,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      showHelloPageStart: (sleep: number) => showHelloPage.start({ sleep }),
    },
    dispatch,
  );

const HelloIndex: FC<EnhancedHelloPageProps> = ({
  hello,
  isLoading,
  showHelloPageStart,
}) => {
  const [sleep, setSleep] = useState(0);

  useEffect(() => {
    // tslint:disable-next-line: insecure-random
    const newSleep = Math.ceil(Math.random() * 10000);
    setSleep(newSleep);
    showHelloPageStart(newSleep);
    // tslint:disable-next-line: align
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <h1>Hello World index page</h1>
      <p>こんにちわこんにちわ</p>
      {isLoading ? (
        <p>Message is loading. waiting for {sleep}ms</p>
      ) : (
        <p>message: {hello.message}</p>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloIndex);

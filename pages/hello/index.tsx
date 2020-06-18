import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { showHelloPage } from '../../actions/hello';
import { HelloPageState } from '../../reducer';

const helloSelector = (state: HelloPageState) => state.hello;
const isLoadingSelector = (state: HelloPageState) => state.isLoading;

const HelloIndex: FC = () => {
  // tslint:disable-next-line: insecure-random
  const [sleep] = useState(Math.ceil(Math.random() * 10000));
  const hello = useSelector(helloSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHelloPage.start({ sleep }));
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

export default HelloIndex;

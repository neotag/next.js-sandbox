import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Head from 'next/head';
import Link from 'next/link';

import { Heading } from '@/components/sandbox/heading';
import { showHelloPage } from '../../actions/hello';
import { HelloPageState } from '../../reducer';

const helloSelector = (state: HelloPageState) => state.hello;
const isLoadingSelector = (state: HelloPageState) => state.isLoading;

const HelloIndex: FC = () => {
  // tslint:disable-next-line: insecure-random
  const [sleep, setSleep] = useState(Math.ceil(Math.random() * 10000));
  const [defaultSleep] = useState(sleep);
  const hello = useSelector(helloSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showHelloPage.start({ sleep }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (sleep > 0) {
      setTimeout(() => setSleep(sleep - 100), 100);
    }
  }, [sleep]);

  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <Heading
        titleText={`Hello World index page. sleep: ${defaultSleep}`}
        leadText={
          isLoading
            ? `Message is loading. waiting for ${sleep}ms`
            : `message: ${hello.message}`
        }
      />
      <h1>Hello World index page</h1>
      <p>こんにちわこんにちわ</p>
      {isLoading ? (
        <p>Message is loading. waiting for {sleep}ms</p>
      ) : (
        <p>message: {hello.message}</p>
      )}
      <ul>
        <li>
          <Link href="/">Go to top page.</Link>
        </li>
        <li>
          <a href="/hello">Refresh this page.</a>
        </li>
      </ul>
    </>
  );
};

export default HelloIndex;

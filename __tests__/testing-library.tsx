// tslint:disable-next-line: no-single-line-block-comment
/* eslint-disable no-console */
import { render } from '@testing-library/react';
import React from 'react';
import Index from '../pages/index';

test('renders deploy link', () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(
    /Instantly deploy your Next\.js site to a public URL with Vercel\./,
  );
  expect(linkElement).toBeInTheDocument();
});

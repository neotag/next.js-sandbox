import React from 'react';
import { Heading } from './heading';

export default { title: 'Sandbox Heading' };

export const normalHeading = () => <Heading titleText="見出し！！" />;

export const withEmoji = () => (
  <Heading titleText="見出し！！" leadText="リード文 😀 😎 👍 💯" />
);

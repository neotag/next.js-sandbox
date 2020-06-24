import React from 'react';

import { Heading } from '@/components/sandbox/heading';

export default { title: 'Sandbox Heading' };
export const normalHeading = () => <Heading titleText="見出し！！" />;
export const withEmoji = () => (
  <Heading titleText="見出し！！" leadText="リード文 😀 😎 👍 💯" />
);

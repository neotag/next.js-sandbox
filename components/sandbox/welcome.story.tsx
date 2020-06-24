import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { linkTo } from '@storybook/addon-links';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Welcome } from '@storybook/react/demo';

export default { title: 'Welcome' };

export const toStorybook = () => <Welcome showApp={linkTo('Demo Button')} />;

import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Input from '@/components/Custom/Input/Input.component';

import GlobalStyle from '@/styles/GlobalStyle';

export default {
  title: 'custom|Input',
  component: Input,
  decorators: [withKnobs]
};

export const big = () => {
  return (
    <>
      <GlobalStyle />
      <Input onSearch={(keyword: string) => console.log(keyword)} />
    </>
  );
};

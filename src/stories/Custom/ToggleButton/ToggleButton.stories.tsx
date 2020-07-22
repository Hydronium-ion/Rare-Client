import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import ToggleButton from '#Custom/ToggleButton/ToggleButton.component';

import GlobalStyle from '@Styles/GlobalStyle';

export default {
  title: 'custom|ToggleButton',
  component: ToggleButton,
  decorators: [withKnobs]
};

export const toggleButton = () => {
  return (
    <>
      <GlobalStyle />
      <ToggleButton />
    </>
  );
};

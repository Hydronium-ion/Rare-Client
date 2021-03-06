import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import GlobalTheme from '@Styles/GlobalTheme.component';

import Card from '#Custom/Card/Card.component';
import { CARD_DATA } from '#Custom/Card/Card.data';

export default {
  title: 'custom|Card',
  component: Card,
  decorators: [withKnobs]
};

export const card = () => {
  return (
    <GlobalTheme>
      <Card refCard={null} {...CARD_DATA} />
    </GlobalTheme>
  );
};

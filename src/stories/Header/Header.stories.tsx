import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Header from '@/components/Header/Header.component';

export default {
  title: 'components|Header',
  component: Header,
  decorators: [withKnobs]
};

export const header = () => {
  return <Header />;
};

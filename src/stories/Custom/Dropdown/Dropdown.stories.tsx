import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Dropdown from '#Custom/Dropdown/Dropdown.component';

export default {
  title: 'custom|Dropdown',
  component: Dropdown,
  decorators: [withKnobs]
};

export const dropdown = () => {
  return <Dropdown />;
};

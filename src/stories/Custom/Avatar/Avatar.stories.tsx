import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Avatar from '@/components/Custom/Avatar/Avatar.component';

export default {
  title: 'custom|Avatar',
  component: Avatar,
  decorators: [withKnobs]
};

export const big = () => {
  return <Avatar src="https://img.hankyung.com/photo/201906/03.19979855.1.jpg" size="big" />;
};

export const medium = () => {
  return <Avatar src="https://img.hankyung.com/photo/201906/03.19979855.1.jpg" size="medium" />;
};

export const small = () => {
  return <Avatar src="https://img.hankyung.com/photo/201906/03.19979855.1.jpg" size="small" />;
};

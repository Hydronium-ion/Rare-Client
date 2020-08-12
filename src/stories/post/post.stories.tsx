import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import SkeletonPost from '@Pages/Post/SkeletonPost.component';

import GlobalStyle from '@Styles/GlobalStyle';
import GlobalTheme from '@Styles/GlobalTheme.component';

export default {
  title: 'custom|SkeletonPost',
  component: SkeletonPost,
  decorators: [withKnobs]
};

export const toggleButton = () => {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <SkeletonPost />
    </GlobalTheme>
  );
};

import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import GlobalTheme from '@Styles/GlobalTheme.component';

import SkeletonCard from '#Custom/Card/SkeletonCard.component';

export default {
  title: 'custom|SkeletonCard',
  component: SkeletonCard,
  decorators: [withKnobs]
};

export const skeletonCard = () => {
  return (
    <GlobalTheme>
      <SkeletonCard />
    </GlobalTheme>
  );
};

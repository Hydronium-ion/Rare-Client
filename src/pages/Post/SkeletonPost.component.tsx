import React from 'react';

import { SkeletonHeader, SkeletonContent } from './SkeletonPost.styles';

const SkeletonCard = () => {
  return (
    <>
      <SkeletonHeader />
      <SkeletonContent />
    </>
  );
};

export default SkeletonCard;

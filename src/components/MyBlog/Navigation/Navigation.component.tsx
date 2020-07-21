import React, { useState } from 'react';

import useSelectActives from '@Hooks/useSelectActives';
import { getEnumLength } from '@Utils/util';

import { ColoredLink, Container } from './Navigation.styles';

enum EBlogContentsType {
  'BLOG' = 0,
  'FOLLOWERS' = 1
}

export interface IColoredLinkProp {
  selected: boolean;
}

const contentsLength = getEnumLength(EBlogContentsType);

const BlogContents = () => {
  const { actives, clickHandler } = useSelectActives<EBlogContentsType>(contentsLength);
  return (
    <Container>
      <ColoredLink
        selected={actives[EBlogContentsType.BLOG]}
        onClick={clickHandler(EBlogContentsType.BLOG)}
        to="/myblog/123">
        글
      </ColoredLink>
      <ColoredLink
        selected={actives[EBlogContentsType.FOLLOWERS]}
        onClick={clickHandler(EBlogContentsType.FOLLOWERS)}
        to="/myblog/123">
        좋아하는 사람
      </ColoredLink>
    </Container>
  );
};

export default BlogContents;

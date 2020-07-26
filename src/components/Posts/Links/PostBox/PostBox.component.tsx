import React from 'react';

import Icon from '#Icon/Icon.component';

import { Container, PostMenuContainer, PostMenu, PostMenuTitle } from './PostBox.styles';

export interface IDirection {
  direction: 'left' | 'right';
}

type IPostBoxProp = IDirection & {
  menu: string;
  title: string;
};

const PostBox = ({ direction, menu, title }: IPostBoxProp) => {
  return (
    <Container direction={direction}>
      <Icon icon={direction === 'left' ? 'leftArrow' : 'rightArrow'} color="#1263CE" />
      <PostMenuContainer>
        <PostMenu>{menu}</PostMenu>
        <PostMenuTitle>{title}</PostMenuTitle>
      </PostMenuContainer>
    </Container>
  );
};

export default PostBox;

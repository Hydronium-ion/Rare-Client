import React from 'react';

import Icon from '#Icon/Icon.component';

import { Container, IconContainer, LikesNumberContainer, LikesNumber, IconBox } from './Likes.styles';

interface ILikes {
  likes: number;
}

const Likes = ({ likes }: ILikes) => {
  return (
    <Container>
      <IconContainer>
        <IconBox>
          <Icon icon="likes" />
        </IconBox>
        <LikesNumberContainer>
          <LikesNumber>{likes}</LikesNumber>
        </LikesNumberContainer>
        <IconBox>
          <Icon icon="likes" />
        </IconBox>
      </IconContainer>
    </Container>
  );
};

export default Likes;

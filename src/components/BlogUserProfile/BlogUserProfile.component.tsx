import React from 'react';

import Avatar from '#Custom/Avatar/Avatar.component';

import { Container, UserInfoContainer, Nickname, Introduction } from './BlogUserProfile.styles';

interface IBlogUserProfileProp {
  nickname: string;
  introduction: string;
  imageSrc: string;
}

const BlogUserProfile = ({ nickname, introduction, imageSrc }: IBlogUserProfileProp) => {
  return (
    <Container>
      <Avatar src={imageSrc} size="big" />
      <UserInfoContainer>
        <Nickname>{nickname}</Nickname>
        <Introduction>{introduction}</Introduction>
      </UserInfoContainer>
    </Container>
  );
};

export default BlogUserProfile;

import React from 'react';

import Avatar from '#Custom/Avatar/Avatar.component';

import { Container, UserDetail } from './UserProfile.styles';

interface IUserProfile {
  nickname: string;
  description: string;
}

const UserProfile = ({ nickname, description }: IUserProfile) => {
  return (
    <Container>
      <Avatar src={'https://img.hankyung.com/photo/201906/03.19979855.1.jpg'} size="big" />
      <UserDetail>
        <div>{nickname}</div>
        <div>{description}</div>
      </UserDetail>
    </Container>
  );
};

export default UserProfile;

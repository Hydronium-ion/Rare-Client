import React from 'react';
import { useParams } from 'react-router-dom';

import UserInfo from '#/Profile/UserInfo/UserInfo.component';
import TitleInput from '#/Profile/TitleInput/TitleInput.component';
import EmailInput from '#/Profile/EmailInput/EmailInput.component';
import Leave from '#/Profile/Leave/Leave.component';

import { Container, BottomContainer } from './Profile.styles';

interface IProfileParam {
  id: string;
}

const Profile = () => {
  const { id } = useParams<IProfileParam>();
  return (
    <Container>
      <UserInfo />
      <BottomContainer>
        <TitleInput />
        <EmailInput />
        <Leave />
      </BottomContainer>
    </Container>
  );
};

export default Profile;

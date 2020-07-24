import React from 'react';
import { useParams } from 'react-router-dom';

import UserInfo from '#/Profile/UserInfo/UserInfo.component';
import Input from '#/Profile/Input/Input.component';
import Leave from '@/components/Profile/Input/Leave/Leave.component';

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
        <Input
          category="Rare 제목"
          defaultUserInfo="한국어는 길다. 세종대왕은 한글을 창제."
          about="개인 블로그 제목을 정합니다."
        />

        <Input
          category="Email"
          defaultUserInfo="한국어는 길다. 세종대왕은 한글을 창제."
          about="개인 Email을 입력합니다."
        />
        <Leave />
      </BottomContainer>
    </Container>
  );
};

export default Profile;

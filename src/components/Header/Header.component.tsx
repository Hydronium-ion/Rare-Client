import React from 'react';

import Icon from '@/components/Custom/Icon/Icon.component';
import Button from '@/components/Custom/Button/Button.component';
import Avatar from '@/components/Custom/Avatar/Avatar.component';

import { Container, LeftHeader, RightHeader, UserProfile } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <LeftHeader>
        <Icon icon="rare" size="10rem" />
      </LeftHeader>
      <RightHeader>
        <Icon icon="search" />
        <Button theme="hover" size="medium">
          로그인
        </Button>
        <UserProfile>
          <Avatar src="https://img.hankyung.com/photo/201906/03.19979855.1.jpg" size="medium" />
          <Icon icon="downArrow" size="0.4rem" />
        </UserProfile>
        <Icon icon="bell" />
      </RightHeader>
    </Container>
  );
};

export default Header;

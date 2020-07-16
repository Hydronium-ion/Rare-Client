import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '#Icon/Icon.component';
import Button from '#Custom/Button/Button.component';
import Avatar from '#Custom/Avatar/Avatar.component';

import { Container, LeftHeader, RightHeader, UserProfile } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <LeftHeader>
        <Link to="/">
          <Icon icon="rare" size="10rem" />
        </Link>
      </LeftHeader>
      <RightHeader>
        <Link to="/search">
          <Icon icon="search" />
        </Link>
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

import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '#Icon/Icon.component';
import Button from '#Custom/Button/Button.component';
import Avatar from '#Custom/Avatar/Avatar.component';
import Dropdown from '#Custom/Dropdown/Dropdown.component';

import { Container, LeftHeader, RightHeader, Headers } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <Headers>
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
          <Dropdown />
          <Icon icon="bell" />
        </RightHeader>
      </Headers>
    </Container>
  );
};

export default Header;

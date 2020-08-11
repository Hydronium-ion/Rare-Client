import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Icon from '#Icon/Icon.component';
import Button from '#Custom/Button/Button.component';
import Dropdown from '#Custom/Dropdown/Dropdown.component';
import Login from '#Custom/Modal/Login/Login.component';

import { Container, LeftHeader, RightHeader, Headers } from './Header.styles';

import { openModal } from '@Store/modal/modal.actions';

const Header = () => {
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(
      openModal({
        modalType: 'login',
        on: true
      })
    );
  };

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
          <Button theme="hover" size="medium" onClick={openLoginModal}>
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

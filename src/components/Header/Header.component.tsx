import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Icon from '#Icon/Icon.component';
import Button from '#Custom/Button/Button.component';
import Dropdown from '#Custom/Dropdown/Dropdown.component';
import Modal from '#Custom/Modal/Modal.component';

import { Container, LeftHeader, RightHeader, Headers } from './Header.styles';

import { openModal } from '@Store/modal/modal.actions';

const Header = () => {
  const dispatch = useDispatch();
  const openLoginModal = () => {
    dispatch(openModal({ title: '로그인', content: '로그인하시겠습니까?', callback: () => {}, on: true }));
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

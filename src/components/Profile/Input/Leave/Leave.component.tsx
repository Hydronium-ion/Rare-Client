import React, { useState } from 'react';

import Button from '#Custom/Button/Button.component';

import { Container, InfoContainer, About, Menu } from '#/Profile/Input/Input.styles';

const Leave = () => {
  return (
    <Container>
      <InfoContainer>
        <Menu>Email</Menu>
        <Button theme="primary" size="medium">
          회원 탈퇴
        </Button>
      </InfoContainer>
      <About>Rare에서 떠납니다.</About>
    </Container>
  );
};

export default Leave;

import React from 'react';

import { Methods, Container, Description } from './Login.styles';
import Icon from '#Icon/Icon.component';

const Login = () => {
  return (
    <Methods>
      <Container>
        <Icon icon="github" />
        <Description>GitHub으로 로그인</Description>
      </Container>
      <Container>
        <Icon icon="facebook" />
        <Description>Facebook으로 로그인</Description>
      </Container>
      <Container>
        <Icon icon="google" />
        <Description>Google로 로그인</Description>
      </Container>
    </Methods>
  );
};

export default Login;

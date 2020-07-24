import React, { useState } from 'react';

import Button from '#Custom/Button/Button.component';

import {
  Container,
  InfoContainer,
  TitleContainer,
  Title,
  About,
  Menu,
  Input,
  InputContainer
} from './EmailInput.styles';

const EmailInput = () => {
  const [selected, setSelected] = useState(false);

  const turnOnModifier = () => setSelected(true);
  const turnOffModifier = () => setSelected(false);

  return (
    <Container>
      <InfoContainer>
        <Menu>Email</Menu>
        {selected ? (
          <InputContainer>
            <Input />
            <Button theme="underlined" size="medium" onClick={turnOffModifier}>
              수정
            </Button>
          </InputContainer>
        ) : (
          <TitleContainer>
            <Title>한국어는 길다 왜냐면 한국어는 한국사람이 만들었기 때문이다.</Title>
            <Button theme="underlined" size="medium" onClick={turnOnModifier}>
              수정
            </Button>
          </TitleContainer>
        )}
      </InfoContainer>
      <About>개인 Email을 입력합니다.</About>
    </Container>
  );
};

export default EmailInput;

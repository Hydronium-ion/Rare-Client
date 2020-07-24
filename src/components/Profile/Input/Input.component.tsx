import React, { useState } from 'react';

import Button from '#Custom/Button/Button.component';

import {
  Container,
  InfoContainer,
  DefaultInfoContainer,
  DefaultInfo,
  About,
  Menu,
  Modify,
  ModifyContainer
} from './Input.styles';

interface IInputRowProp {
  category: string;
  defaultUserInfo: string;
  about: string;
}

const InputRow = ({ category, defaultUserInfo, about }: IInputRowProp) => {
  const [selected, setSelected] = useState(false);

  const turnOnModifier = () => setSelected(true);
  const turnOffModifier = () => setSelected(false);

  return (
    <Container>
      <InfoContainer>
        <Menu>{category}</Menu>
        {selected ? (
          <ModifyContainer>
            <Modify />
            <Button theme="underlined" size="medium" onClick={turnOffModifier}>
              저장
            </Button>
          </ModifyContainer>
        ) : (
          <DefaultInfoContainer>
            <DefaultInfo>{defaultUserInfo}</DefaultInfo>
            <Button theme="underlined" size="medium" onClick={turnOnModifier}>
              수정
            </Button>
          </DefaultInfoContainer>
        )}
      </InfoContainer>
      <About>{about}</About>
    </Container>
  );
};

export default InputRow;

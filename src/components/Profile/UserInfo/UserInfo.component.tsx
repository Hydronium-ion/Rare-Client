import React, { useState } from 'react';

import Avatar from '#Custom/Avatar/Avatar.component';
import Button from '#Custom/Button/Button.component';

import {
  Container,
  ThumbnailContainer,
  ButtonContainer,
  Name,
  DetailContainer,
  Input,
  InputContainer,
  SaveButton,
  ModifyButton
} from './UserInfo.styles';

const UserInfo = () => {
  const [selected, setSelected] = useState(false);

  const turnOnModifier = () => setSelected(true);
  const turnOffModifier = () => setSelected(false);

  return (
    <Container>
      <ThumbnailContainer>
        <Avatar src="https://www.topstarnews.net/news/photo/202003/737792_460267_051.jpg" size="big" />
        <ButtonContainer>
          <Button theme="primary" size="medium">
            이미지 업로드
          </Button>
          <Button theme="secondary" size="medium">
            이미지 제거
          </Button>
        </ButtonContainer>
      </ThumbnailContainer>
      <DetailContainer>
        {selected ? (
          <InputContainer>
            <Input placeholder="이름을 입력하세요" />
            <Input placeholder="자기 소개를 입력하세요" />
            <SaveButton>
              <Button theme="underlined" size="medium" onClick={turnOffModifier}>
                저장
              </Button>
            </SaveButton>
          </InputContainer>
        ) : (
          <>
            <Name>Old Man</Name>
            <ModifyButton>
              <Button theme="underlined" size="medium" onClick={turnOnModifier}>
                수정
              </Button>
            </ModifyButton>
          </>
        )}
      </DetailContainer>
    </Container>
  );
};

export default UserInfo;

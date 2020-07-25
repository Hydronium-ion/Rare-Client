import React from 'react';

import Button from '#/Custom/Button/Button.component';
import Icon from '#Custom/Icon/Icon.component';

import { UploadContainer, ModalTitleContainer, ImageContainer, ModalTextarea, PublicButtonContainer, TumbnailButtonContainer, SubmitContainer } from './Upload.styles';

const Upload = () => {
  return (
    <UploadContainer>
      <div>
        <ModalTitleContainer>포스트 미리보기</ModalTitleContainer>
        <ImageContainer>
          <TumbnailButtonContainer>
            <Icon icon="picture" size="100" />
            <Button theme="hover" size="medium">
              <span>썸네일 업로드</span>
            </Button>
          </TumbnailButtonContainer>
        </ImageContainer>
      </div>
      <div>
        <ModalTitleContainer>포스트 작성 제목</ModalTitleContainer>
        <div>
          <ModalTextarea placeholder="포스트를 짧게 소개해보세요."></ModalTextarea>
        </div>
      </div>
      <div>
        <ModalTitleContainer>공개 설정</ModalTitleContainer>
        <PublicButtonContainer>
          <Button theme="hover" size="medium">
            <Icon icon="globe" color="#1EA7FD" size="12" margin="0rem 0.75rem 0rem 0rem" />
            <span>전체 공개</span>
          </Button>
          <Button theme="hover" size="medium">
            <Icon icon="lock" color="#1EA7FD" size="12" margin="0rem 0.75rem 0rem 0rem" />
            <span>비공개</span>
          </Button>
        </PublicButtonContainer>
      </div>
      <SubmitContainer>
        <span>작성하기</span>
      </SubmitContainer>
    </UploadContainer>
  );
};

export default Upload;
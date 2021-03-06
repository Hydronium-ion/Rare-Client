import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '#/Custom/Button/Button.component';
import Icon from '#Custom/Icon/Icon.component';
import ThumbnailUpload from './ThumbnailUplaod.component';

import {
  UploadContainer,
  ModalTitleContainer,
  ModalTextarea,
  PublicButtonContainer,
  SubmitContainer
} from './Upload.styles';

import { fetchPostStart } from '@/store/post/post.actions';

const Upload = () => {
  const dispatch = useDispatch();

  const submitPost = async () => {
    await dispatch(fetchPostStart('post'));
  }

  return (
    <UploadContainer>
      <div>
        <ModalTitleContainer>포스트 미리보기</ModalTitleContainer>
        <ThumbnailUpload />
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
      <SubmitContainer onClick={submitPost}>
        <span>작성하기</span>
      </SubmitContainer>
    </UploadContainer>
  );
};

export default Upload;

import React from 'react';

import Button from '#Custom/Button/Button.component';

import { Container, Counts, CommentBox, CommentTextarea, ButtonContainer } from './Comments.styles';

const Comments = () => {
  return (
    <Container>
      <Counts>25개의 댓글</Counts>
      <CommentBox>
        <CommentTextarea placeholder="댓글을 작성하세요" />
        <ButtonContainer>
          <Button theme="primary" size="medium">
            댓글 작성
          </Button>
        </ButtonContainer>
      </CommentBox>
    </Container>
  );
};

export default Comments;

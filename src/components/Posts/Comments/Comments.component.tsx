import React, { useState, useCallback } from 'react';

import Button from '#Custom/Button/Button.component';
import CommentsList from '#/Posts/Comments/CommentsList.component';

import { COMMENT_DATA } from './Comment.data';

import { Container, Counts, CommentBox, CommentTextarea, ButtonContainer } from './Comments.styles';

const Comments = () => {
  const [comment, setComment] = useState('')
  const [removeId, setRemoveId] = useState('');

  const onRemove = useCallback(
    (id: string) => {
      setRemoveId(id);
    },
    [],
  );

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

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
      <CommentsList comments={COMMENT_DATA} currentUserId="1" onRemove={onRemove} />
    </Container>
  );
};

export default Comments;

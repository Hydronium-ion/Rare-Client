import React, { useState, useCallback, useEffect } from 'react';

import Button from '#Custom/Button/Button.component';
import CommentsList from '#/Posts/Comments/CommentsList.component';

import { IComment } from '@/types/Comment';

import { COMMENT_DATA } from './Comment.data';

import { Container, Counts, CommentBox, CommentTextarea, ButtonContainer } from './Comments.styles';

const Comments = () => {
  const [comment, setComment] = useState('')
  const [removeId, setRemoveId] = useState('');
  const [commentData, setCommentData] = useState<IComment[]>([]);

  useEffect(() => {
    setCommentData(COMMENT_DATA);
  })
  
  const onRemove = useCallback(
    (id: string) => {
      setRemoveId(id);
    },
    [],
  );

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onClickedComment = () => {
    // 서버요청
    // setCommentData({
    //   ...commentData,
    //   // 
    // })

  }

  return (
    <Container>
      <Counts>25개의 댓글</Counts>
      <CommentBox>
        <CommentTextarea onInput={onChangeComment} placeholder="댓글을 작성하세요" />
        <ButtonContainer>
          <Button onClick={onClickedComment} theme="primary" size="medium">
            댓글 작성
          </Button>
        </ButtonContainer>
      </CommentBox>
      {/* 댓글이 있는경우에만 랜더링 */}
      <CommentsList comments={commentData} currentUserId="1" onRemove={onRemove} />
    </Container>
  );
};

export default Comments;

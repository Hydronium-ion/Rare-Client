import React from 'react';
import Avartar from '#Custom/Avatar/Avatar.component';

import { IComment } from '@/types/Comment';

import {CommentsListContainer, UserProfileContainer, CommentWrap, UserProfile, EditCommentContainer, UserInfo, CreateAt, UserName} from './CommentItem.style'

interface PostCommentItemProps {
  comment: IComment;
  ownComment: boolean;
  onRemove: (id: string) => any;
}

const CommentsList = ({comment, ownComment, onRemove}: PostCommentItemProps) => {
  const { id, user, created_at, text } = comment;

  return (
    <CommentsListContainer>
      <UserProfileContainer>
        <UserProfile>
          <Avartar size="medium" src={user.profile.thumbnail} />
          <UserInfo>
            <UserName>{user.username}</UserName>
            <CreateAt>{created_at}</CreateAt>
          </UserInfo>
        </UserProfile>
        { ownComment && (
          <EditCommentContainer>
            <span>수정</span>
            <span onClick={() => onRemove(id)}>삭제</span>
          </EditCommentContainer>
        )}
      </UserProfileContainer>
      <CommentWrap>
        { text }
      </CommentWrap>
    </CommentsListContainer>
  );
};

export default CommentsList;
import React from 'react';

import CommentItem from './CommentItem.component';

import { IComment } from '@/types/Comment';

import { PostCommentsListBlock } from './CommentsList.style';

interface PostCommentsListProps {
  comments: IComment[];
  currentUserId: null | string;
  onRemove: (id: string) => any;
}

const CommentsList = ({comments, currentUserId, onRemove }: PostCommentsListProps) => {
  return (
    <PostCommentsListBlock>
      {comments.map(comment => (
        <CommentItem
          comment={comment}
          key={comment.id}
          ownComment={currentUserId === (comment.user && comment.user.id)}
          onRemove={onRemove}
        />
      ))}
    </PostCommentsListBlock>
  );
};

export default CommentsList;
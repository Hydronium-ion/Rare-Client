import React from 'react';

import CommentItem from './CommentItem.component';

import { Comment } from '@/types/Comment';

import { PostCommentsListBlock } from './CommentsList.style';

interface PostCommentsListProps {
  comments: Comment[];
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
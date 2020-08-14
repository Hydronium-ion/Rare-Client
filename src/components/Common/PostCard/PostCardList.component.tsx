import React from 'react';

import PostCard from '@/components/Common/PostCard/PostCard.component';

import IPost from '@/types/Post';

export interface PostCardListProps {
  posts: IPost[]
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <div>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  );
};

export default PostCardList;



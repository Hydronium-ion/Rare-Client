import React from 'react';

import Avatar from '#Custom/Avatar/Avatar.component';
import Icon from '#Icon/Icon.component';

import IPost from '@/types/Post';

import { ThumbnailContainer, UserContainer, UsernameContainer, TitleTag, Title, BlackOpacity, PostInfoContainer, PostCardContainer, ViewsContainer, LikesContainer, UserInteractionContainer, NumberContainer, CreateAtInfo } from './PostCard.styles';

export interface IPostCardProps {
  post: IPost
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <PostCardContainer>
      <UserContainer>
        <Avatar src={post.author.avatarUrl} size="medium" />
        <UsernameContainer>
          <span>{post.author.name}</span>
        </UsernameContainer>
      </UserContainer>
      <ThumbnailContainer color={post.thumbnail}>
        <BlackOpacity></BlackOpacity>
        <TitleTag>{post.tags[0]}</TitleTag>
        <Title>{post.title}</Title>
      </ThumbnailContainer>
      <PostInfoContainer>
        <CreateAtInfo>
          <p>{post.createdAt}</p>
          <p> {post.comment}개의 댓글</p>
        </CreateAtInfo>
        <UserInteractionContainer>
          <ViewsContainer>
            <Icon icon="views" size="1rem" />
            <NumberContainer>{post.views}</NumberContainer>
          </ViewsContainer>
          <LikesContainer>
            <Icon icon="likes" size="0.8rem" color="red" />
            <NumberContainer>{post.likes}</NumberContainer>
          </LikesContainer>
        </UserInteractionContainer>
      </PostInfoContainer>
    </PostCardContainer>
  );
};

export default PostCard;


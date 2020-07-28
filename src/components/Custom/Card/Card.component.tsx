import React from 'react';

import Icon from '#Icon/Icon.component';
import Avatar from '#Custom/Avatar/Avatar.component';

import {
  CardContainer,
  UserContainer,
  CardFooter,
  UserInteractionContainer,
  ViewsContainer,
  LikesContainer,
  ThumbnailContainer,
  CardTitle,
  CardContents,
  UserName,
  NumberContainer
} from './Card.styles';

import IBlog from '@Types/Blog';

export type ICardProp = {
  refCard: ((instance: HTMLDivElement | null) => void) | null;
} & IBlog;

const Card = (props: ICardProp) => {
  const {
    title,
    content,
    thumbnail,
    author: { id, name, avatarUrl },
    createdAt,
    views,
    likes,
    refCard
  } = props;
  return (
    <CardContainer ref={refCard}>
      <div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardContents>{content}</CardContents>
        </div>
      </div>
      <ThumbnailContainer>
        <img src={thumbnail} alt="" />
      </ThumbnailContainer>
      <CardFooter>
        <UserContainer>
          <span>
            <Avatar src={avatarUrl} size="small" />
          </span>
          <UserName>{name}</UserName>
          <span>{createdAt}</span>
        </UserContainer>
        <UserInteractionContainer>
          <ViewsContainer>
            <Icon icon="views" size="0.9rem" />
            <NumberContainer>{views}</NumberContainer>
          </ViewsContainer>
          <LikesContainer>
            <Icon icon="likes" size="0.6rem" color="red" />
            <NumberContainer>{likes}</NumberContainer>
          </LikesContainer>
        </UserInteractionContainer>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

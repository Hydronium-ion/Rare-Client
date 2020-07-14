import React from 'react';

import Icon from '@/components/Custom/Icon/Icon.component';
import Avatar from '@/components/Custom/Avatar/Avatar.component';

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

export interface ICardProp {
  title: string;
  contents: string;
  thumbnail: string;
  avatar: string;
  username: string;
  createAt: string;
  views: number;
  likes: number;
}

const Card = (props: ICardProp) => {
  const { title, contents, thumbnail, avatar, username, createAt, views, likes } = props;
  return (
    <CardContainer>
      <div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardContents>{contents}</CardContents>
        </div>
      </div>
      <ThumbnailContainer>
        <img src={thumbnail} alt="" />
      </ThumbnailContainer>
      <CardFooter>
        <UserContainer>
          <span>
            <Avatar src={avatar} size="small" />
          </span>
          <UserName>{username}</UserName>
          <span>{createAt}</span>
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

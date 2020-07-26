import React, { useState } from 'react';

import { POST_DATA } from './Posts.data';

import Likes from '#/Posts/Likes/Likes.component';
import Bookmarks from '#/Posts/Bookmark/Bookmark.component';
import Links from '#/Posts/Links/Links.component';
import Comments from '#/Posts/Comments/Comments.component';
import UserProfile from '#/Posts/UserProfile/UserProfile.component';

import {
  PostsContainer,
  MainContent,
  PostTitle,
  PostCreate,
  TagContainer,
  Tag,
  PostContentContainer
} from './Posts.styles';

const marks = [
  '🧞‍♂️TL;DR',
  '🔑 로그인은 어떻게 이루어지나',
  '😈 보안은 어떻게 뚫리나',
  '😱 브라우저 저장소 종류와 보안 이슈',
  '🤔 그래서 로그인을 어떻게 한다는 거야?',
  '정리',
  '👩🏻‍💻 React에 적용하기',
  '준비물',
  '클라이언트에서 처리하기',
  '🎁 보너스',
  '로그인 만료, 로그인 연장 처리하기',
  '처리할 "로그인" 케이스들',
  '준비물',
  '클라이언트에서 처리하기',
  '🥳 마치며',
  '참고 자료'
];

const Posts = ({ match }: any) => {
  const [post, setPost] = useState(POST_DATA);

  return (
    <PostsContainer>
      <Likes likes={12} />
      <Bookmarks marks={marks} />
      <MainContent>
        <div>
          <PostTitle>🍪 프론트에서 안전하게 로그인 처리하기!!! (ft. React)</PostTitle>
          <PostCreate>
            <span>huey</span>
            <span> · </span>
            <span>2020년 7월 21일</span>
          </PostCreate>
          <TagContainer>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
            <Tag>CORS</Tag>
          </TagContainer>
        </div>
        <PostContentContainer>
          <img src="https://media.vlpt.us/images/huey/post/8eac69b8-d530-413a-b497-6852f0020ac2/2.jpeg" alt="" />
        </PostContentContainer>
        <UserProfile nickname="Old man" description="어르신" />
        <Links
          leftMenu="이전 포스트"
          leftMenuTitle="하이드로늄 이온 테스트"
          rightMenu="다음 포스트"
          rightMenuTitle="하이드로늄 이온 테스트2"
        />
        <Comments />
      </MainContent>
    </PostsContainer>
  );
};

export default Posts;

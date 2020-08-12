import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Likes from '#/Posts/Likes/Likes.component';
import Bookmarks from '#/Posts/Bookmark/Bookmark.component';
import Links from '#/Posts/Links/Links.component';
import Comments from '#/Posts/Comments/Comments.component';
import UserProfile from '#/Posts/UserProfile/UserProfile.component';
import Skeleton from './SkeletonPost.component';

import useFetch from '@Hooks/useFetch';

import IPost from '@Types/Post';

import {
  PostsContainer,
  MainContent,
  PostTitle,
  PostCreate,
  TagContainer,
  Tag,
  PostContentContainer
} from './Post.styles';

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

interface IPostParam {
  id: string;
}

const Post = ({ match }: any) => {
  const [post, setPost] = useState<IPost>();
  const { id } = useParams<IPostParam>();
  const { loading, error } = useFetch(setPost, `${process.env.SERVER!}/api/posts/${id}`);

  if (error) {
    return <div>에러</div>;
  }

  return (
    <PostsContainer>
      {loading || !post ? (
        <Skeleton />
      ) : (
        <>
          <Likes likes={post.likes} />
          <Bookmarks marks={marks} />
          <MainContent>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <PostCreate>
                <span>{post.author.name}</span>
                <span> · </span>
                <span>{post.createdAt}</span>
              </PostCreate>
              <TagContainer>
                <Tag>React</Tag>
                <Tag>Javascript</Tag>
                <Tag>CORS</Tag>
              </TagContainer>
            </div>
            <PostContentContainer>
              <img src={post.thumbnail} alt={`${post.title} thumbnail`} />
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
        </>
      )}
    </PostsContainer>
  );
};

export default Post;

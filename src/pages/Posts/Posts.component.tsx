import React,{ useState } from 'react';

import Icon from '#Icon/Icon.component';
import Avatar from '#Custom/Avatar/Avatar.component';
import Button from '#Custom/Button/Button.component';
import { POST_DATA } from './Posts.data';

import { PostsContainer, LeftContent, IconContainer, IconBox, LikesNumberContainer, MainContent, RightContent, PostTitle, PostCreate, TagContainer, Tag, PostContentContainer, UserProfileContainer, UserDetail, NextPostContainer, NextPostBox, PrevPostBox, PostBox, CommentContainer, CommentNumber, CommentBox, CommentTextarea, CommentButtonContainer, PostMenu, PostMenuTitle } from './Posts.styles';

const Posts = ({match}:any) => {
  const [post, setPost] = useState(POST_DATA)

  return (
    <PostsContainer>
      <LeftContent>
        <IconContainer>
          <IconBox>
            <Icon icon="likes" />
          </IconBox>
          <LikesNumberContainer>
            <span>12</span>
          </LikesNumberContainer>
          <IconBox>
            <Icon icon="likes" />
          </IconBox>
        </IconContainer>
      </LeftContent>
      <RightContent>
        <div>
          <p>🧞‍♂️TL;DR</p>
          <p>🔑 로그인은 어떻게 이루어지나</p>
          <p>😈 보안은 어떻게 뚫리나</p>
          <p>😱 브라우저 저장소 종류와 보안 이슈</p>
          <p>🤔 그래서 로그인을 어떻게 한다는 거야?</p>
          <p>정리</p>
          <p>👩🏻‍💻 React에 적용하기</p>
          <p>준비물</p>
          <p>클라이언트에서 처리하기</p>
          <p>🎁 보너스</p>
          <p>로그인 만료, 로그인 연장 처리하기</p>
          <p>처리할 "로그인" 케이스들</p>
          <p>준비물</p>
          <p>클라이언트에서 처리하기</p>
          <p>🥳 마치며</p>
          <p>참고 자료</p>
        </div>
      </RightContent>
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
          <img src="https://media.vlpt.us/images/huey/post/8eac69b8-d530-413a-b497-6852f0020ac2/2.jpeg" alt=""/>
        </PostContentContainer>
        <UserProfileContainer>
          <Avatar src={'https://img.hankyung.com/photo/201906/03.19979855.1.jpg'} size="big" />
          <UserDetail>
            <div>Huey</div>
            <div>프론트엔드 개발자 블로그</div>
          </UserDetail>
        </UserProfileContainer>
        <NextPostContainer>
          <PrevPostBox>
            <Icon icon="leftArrow" color="#1263CE" />
            <PostBox>
              <PostMenu>이전 포스트</PostMenu>
              <PostMenuTitle>하이드로늄 이온 테스트</PostMenuTitle>
            </PostBox>
          </PrevPostBox>
          <NextPostBox>
            <PostBox>
              <PostMenu>다음 포스트</PostMenu>
              <PostMenuTitle>하이드로늄 이온 테스트2</PostMenuTitle>
            </PostBox>
            <Icon icon="rightArrow" color="#1263CE" />
          </NextPostBox>
        </NextPostContainer>
        <CommentContainer>
          <CommentNumber>25개의 댓글</CommentNumber>
          <CommentBox>
            <CommentTextarea placeholder="댓글을 작성하세요"></CommentTextarea>
            <CommentButtonContainer>
              <Button theme="primary" size="medium">댓글 작성</Button>
            </CommentButtonContainer>
          </CommentBox>
        </CommentContainer>
      </MainContent>
    </PostsContainer>
  );
};

export default Posts;
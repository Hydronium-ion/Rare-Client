import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import UserProfile from '@/components/MyBlog/UserProfile/UserProfile.component';
import Navigation from '@/components/MyBlog/Navigation/Navigation.component';
import Contents from '@/components/MyBlog/Contents/Contents.component';
import TagList from '#/MyBlog/TagList/TagList.component';

import { Container, ContentsContainer } from './MyBlog.styles';

interface IPathParamsProps {
  id: string;
}

const MyBlog = ({ match, location }: RouteComponentProps<IPathParamsProps>) => {
  const {
    params: { id }
  } = match;

  return (
    <Container>
      <UserProfile
        nickname={id}
        imageSrc="https://img.hankyung.com/photo/201906/03.19979855.1.jpg"
        introduction="안녕하세요"
      />
      <Navigation />
      <ContentsContainer>
        <TagList />
        <Contents
          title={'Next js 구동 방식과 getInitalProps'}
          contents={
            'Next js가 React Project의 SSR을 가능하게 한다. 라고는 하는데, 어떤 방식으로 SSR을 가능하게 할까, SSR과 CSR의 구분은 어떻게 되어 있을까.이 궁금증을 해결하기 위해, 먼저 알아야 할 것은 Next js의 구동방식 이라고 생각한다.최초에 N'
          }
          createdAt={'2020년 08월 12일'}
          commentCount={2}
          src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2018/05/25/GK56FYRKQNhU636628664137530011.jpg"
        />
        <Contents
          title={'Next js 구동 방식과 getInitalProps'}
          contents={
            'Next js가 React Project의 SSR을 가능하게 한다. 라고는 하는데, 어떤 방식으로 SSR을 가능하게 할까, SSR과 CSR의 구분은 어떻게 되어 있을까.이 궁금증을 해결하기 위해, 먼저 알아야 할 것은 Next js의 구동방식 이라고 생각한다.최초에 N'
          }
          createdAt={'2020년 08월 12일'}
          commentCount={2}
          src="https://t1.daumcdn.net/cfile/tistory/995AEA405EC533F002"
        />
      </ContentsContainer>
    </Container>
  );
};

export default MyBlog;

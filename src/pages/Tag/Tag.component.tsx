import React from 'react';

import Contents from '@/components/MyBlog/Contents/Contents.component';

import { Container, ContentsContainer } from './Tag.styles';

const Tag = () => {
  return (
    <Container>
      <ContentsContainer>
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

export default Tag;
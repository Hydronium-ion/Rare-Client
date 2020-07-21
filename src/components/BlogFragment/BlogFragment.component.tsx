import React from 'react';

import { Container, Thumbnail, ThumbnailContainer, Title, Contents, Footer, CreatedAt } from './BlogFragment.styles';

interface IBlogFragmentProp {
  title: string;
  contents: string;
  createdAt: string;
  commentCount: number;
  src: string;
}

const BlogFragment = (props: IBlogFragmentProp) => {
  const { title, contents, createdAt, commentCount, src } = props;
  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail src={src} />
      </ThumbnailContainer>
      <div>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <Footer>
          <CreatedAt>{createdAt}</CreatedAt>
          <span>{commentCount}개의 댓글</span>
        </Footer>
      </div>
    </Container>
  );
};

export default BlogFragment;

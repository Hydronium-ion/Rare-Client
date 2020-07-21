import React from 'react';

import { Container, Thumbnail, ThumbnailContainer, Title, Contents, Tags, Footer, CreatedAt } from './Contents.styles';

import Tag from '#Custom/Tag/Tag.component';

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
        <Tags>
          <Tag to="/myblog/123" tag="nextjs" />
        </Tags>
        <Footer>
          <CreatedAt>{createdAt}</CreatedAt>
          <span>{commentCount}개의 댓글</span>
        </Footer>
      </div>
    </Container>
  );
};

export default BlogFragment;

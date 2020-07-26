import React from 'react';

import { Container, MarkContainer, Mark } from './Bookmark.styles';

interface IBookMarkProp {
  marks: string[];
}

const Bookmark = ({ marks }: IBookMarkProp) => {
  return (
    <Container>
      <MarkContainer>
        {marks.map(mark => (
          <Mark>{mark}</Mark>
        ))}
      </MarkContainer>
    </Container>
  );
};

export default Bookmark;

import React from 'react';

import { Container, List, Title, TagNumber, TagLink } from './TagList.styles';

const TagList = () => {
  return (
    <Container>
      <Title>태그 목록</Title>
      <ul>
        <List>
          <TagLink to="/myblog/123">nextjs</TagLink>
          <TagNumber>(123)</TagNumber>
        </List>
        <List>
          <TagLink to="/myblog/123">nextjs</TagLink>
          <TagNumber>(123)</TagNumber>
        </List>
        <List>
          <TagLink to="/myblog/123">nextjs</TagLink>
          <TagNumber>(123)</TagNumber>
        </List>
        <List>
          <TagLink to="/myblog/123">nextjs</TagLink>
          <TagNumber>(123)</TagNumber>
        </List>
        <List>
          <TagLink to="/myblog/123">nextjs</TagLink>
          <TagNumber>(123)</TagNumber>
        </List>
      </ul>
    </Container>
  );
};

export default TagList;

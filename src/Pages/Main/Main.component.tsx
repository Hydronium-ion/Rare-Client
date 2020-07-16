import React from 'react';

import CardList from '#/CardList/CardList.component';
import Header from '#/Header/Header.component';
import PopularTags from '#/PopularTags/PopularTags.component';
import Navigation from '#/Navigation/Navigation.component';

import { Container, Contents, Aside } from './Main.styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <Navigation></Navigation>
      <Contents>
        <CardList />
        <Aside>
          <PopularTags />
        </Aside>
      </Contents>
    </Container>
  );
};

export default Main;

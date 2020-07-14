import React from 'react';

import Header from '@/components/Header/Header.component';
import CardList from '@/components/CardList/CardList.component';
import PopularTags from '@/components/PopularTags/PopularTags.component';
import Navigation from '@/components/Navigation/Navigation.component';

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

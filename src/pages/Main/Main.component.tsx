import React from 'react';

import CardList from '#/CardList/CardList.component';
import PopularTags from '#/PopularTags/PopularTags.component';
import Navigation from '#/Navigation/Navigation.component';

import PageContainer from '@Styles/PageContainer.styles';
import { Contents, Aside } from './Main.styles';

const Main = () => {
  return (
    <PageContainer>
      <Navigation></Navigation>
      <Contents>
        <CardList />
        <Aside>
          <PopularTags />
        </Aside>
      </Contents>
    </PageContainer>
  );
};

export default Main;

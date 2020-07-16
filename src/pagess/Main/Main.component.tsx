import React from 'react';

import CardList from '#/CardList/CardList.component';
import PopularTags from '#/PopularTags/PopularTags.component';
import Navigation from '#/Navigation/Navigation.component';

import { Contents, Aside } from './Main.styles';

const Main = () => {
  return (
    <>
      <Navigation></Navigation>
      <Contents>
        <CardList />
        <Aside>
          <PopularTags />
        </Aside>
      </Contents>
    </>
  );
};

export default Main;

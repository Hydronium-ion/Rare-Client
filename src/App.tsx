import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '@Pages/Main/Main.component';
import Search from '@Pages/Search/Search.component';
import Posts from '@Pages/Posts/Posts.component';
import Header from '#/Header/Header.component';

import GlobalStyle from '@Styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/posts/:id" component={Posts} />
      </Switch>
    </>
  );
};

export default App;

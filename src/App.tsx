import React from 'react';
import {} from 'react-router';
import { Route, Switch } from 'react-router-dom';

import Main from '@Pages/Main/Main.component';
import Search from '@Pages/Search/Search.component';
import Posts from '@Pages/Posts/Posts.component';
import MyBlog from '@Pages/MyBlog/MyBlog.component';
import Profile from '@Pages/Profile/Profile.component';
import Header from '#/Header/Header.component';
import Write from '@Pages/Write/Write.component';
import GlobalStyle from '@Styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/posts/:id" component={Posts} />
        <Route path="/myblog/:id" component={MyBlog} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/write" component={Write} />
      </Switch>
    </>
  );
};

export default App;

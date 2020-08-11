import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '@Pages/Main/Main.component';
import Search from '@Pages/Search/Search.component';
import Posts from '@Pages/Posts/Posts.component';
import MyBlog from '@Pages/MyBlog/MyBlog.component';
import Profile from '@Pages/Profile/Profile.component';
import Write from '@Pages/Write/Write.component';
import Header from '#/Header/Header.component';
import Modal from '#Custom/Modal/Modal.component';

import GlobalStyle from '@Styles/GlobalStyle';
import GlobalTheme from '@Styles/GlobalTheme.component';

const App = () => {
  return (
    <>
      <GlobalTheme>
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
        <Modal />
      </GlobalTheme>
    </>
  );
};

export default App;

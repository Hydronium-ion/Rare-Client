import React from 'react';
import {} from 'react-router';
import { Route, Switch } from 'react-router-dom';

import Main from '@Pages/Main/Main.component';
import Search from '@Pages/Search/Search.component';
import Posts from '@Pages/Posts/Posts.component';
import Header from '#/Header/Header.component';
import MyBlog from '@Pages/MyBlog/MyBlog.component';

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
        <Route
          path="/myblog/:id"
          exact
          render={({ match }) => (
            <div>
              <h1>Author equals: {match.params.id || 'None'}</h1>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;

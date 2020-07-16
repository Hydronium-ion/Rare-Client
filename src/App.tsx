import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '@Pages/Main/Main.component';
import Search from '@Pages/Search/Search.component';

import GlobalStyle from '@Styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  );
};

export default App;

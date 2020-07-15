import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main/Main.component';
import Search from '@/pages/Search/Search.component';

import GlobalStyle from '@/styles/GlobalStyle';

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

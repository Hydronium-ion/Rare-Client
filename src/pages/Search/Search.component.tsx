import React, { useCallback } from 'react';
import { withRouter } from 'react-router';

import Input from '#Custom/Input/Input.component';
import SearchResult from './SearchResult.component';

import { SearchContainer } from './Search.styles';

import * as H from "history";

export interface RouteComponentProps {
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const Search = ({ history, location }: RouteComponentProps) => {
  const query = location.search;
  const onSearch = useCallback(
    (searchQuery: string) => {
      history.replace(`/search?${searchQuery}`);
    },
    [history],
  );

  return (
    <SearchContainer>
      <Input
        onSearch={onSearch}
      />
      <SearchResult keyword={query} />
    </SearchContainer>
  );
};

export default withRouter(Search);

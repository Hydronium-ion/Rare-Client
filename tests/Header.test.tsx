import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';

import Header from '../src/components/Header/Header.component';

test('<Header /> 로그인 버튼 Exists', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const loginButton = getByText('로그인');
  expect(loginButton).toBeInTheDocument();
});

test('<Header /> Dropdown 버튼 Exists', () => {
  const history = createMemoryHistory();
  const { container, getByAltText } = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const dropdownImg = getByAltText('user-profile');
  fireEvent.click(dropdownImg);

  expect(container.getElementsByTagName('li').length).toBe(5);
});

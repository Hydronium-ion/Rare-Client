import React, { useState, useRef } from 'react';

import Avatar from '#Custom/Avatar/Avatar.component';
import Icon from '#Icon/Icon.component';
import useFocusOutEvent from '@/hooks/useFocusOutEvent';

import { UserProfile, Content, List, ListContainer } from './Dropdown.styles';

const Dropdown = () => {
  const [opened, setOpened] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useFocusOutEvent(wrapperRef, setOpened);

  const toggleHandler = () => setOpened(!opened);

  return (
    <UserProfile ref={wrapperRef} onClick={toggleHandler}>
      <Avatar src="https://img.hankyung.com/photo/201906/03.19979855.1.jpg" size="medium" />
      <Icon icon="downArrow" size="0.4rem" />
      {opened && (
        <Content>
          <List>
            <ListContainer to="/myblog">내 블로그</ListContainer>
          </List>
          <List>
            <ListContainer to="/">책갈피</ListContainer>
          </List>
          <List>
            <ListContainer to="/">팔로우</ListContainer>
          </List>
          <List>
            <ListContainer to="/">설정</ListContainer>
          </List>
          <List>
            <ListContainer to="/">로그아웃</ListContainer>
          </List>
        </Content>
      )}
    </UserProfile>
  );
};

export default Dropdown;

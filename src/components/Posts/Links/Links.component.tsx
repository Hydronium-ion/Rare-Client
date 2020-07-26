import React from 'react';

import PostBox from '#/Posts/Links/PostBox/PostBox.component';

import { Container } from './Links.styles';

interface ILinksProp {
  leftMenu: string;
  leftMenuTitle: string;
  rightMenu: string;
  rightMenuTitle: string;
}

const Links = ({ leftMenu, leftMenuTitle, rightMenu, rightMenuTitle }: ILinksProp) => {
  return (
    <Container>
      <PostBox direction="left" menu={leftMenu} title={leftMenuTitle} />
      <PostBox direction="right" menu={rightMenu} title={rightMenuTitle} />
    </Container>
  );
};

export default Links;

import styled, { css } from 'styled-components';

import { IAvatarProp } from './Avatar.component';

const big = css`
  height: 7rem;
  width: 7rem;
`;

const medium = css`
  height: 3rem;
  width: 3rem;
`;

const small = css`
  height: 1.2rem;
  width: 1.2rem;
`;

const getAvatarSize = (props: IAvatarProp) => {
  switch (props.size) {
    case 'big':
      return big;
    case 'medium':
      return medium;
    case 'small':
      return small;
  }
};

export const AvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  display: inline-block;
  ${getAvatarSize}
`;

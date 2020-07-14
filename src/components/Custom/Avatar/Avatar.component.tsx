import React from 'react';

import { AvatarImg } from './Avatar.styles';

export interface IAvatarProp {
  src: string;
  size: 'big' | 'medium' | 'small';
}

const Avatar = ({ src, size }: IAvatarProp) => {
  return <AvatarImg src={src} size={size} />;
};

export default Avatar;

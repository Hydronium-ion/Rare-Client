import React from 'react';

import { TagLink } from './Tag.styles';

interface ITagProp {
  tag: string;
  to: string;
}

const Tag = ({ tag, to }: ITagProp) => {
  return <TagLink to={to}>tag</TagLink>;
};

export default Tag;

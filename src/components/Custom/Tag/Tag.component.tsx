import React from 'react';
import { Link } from 'react-router-dom';

import { TagLink } from './Tag.styles';

interface ITagProp {
  tag: string;
  to: string;
}

const Tag = ({ tag, to }: ITagProp) => {
  return (
      <TagLink to={`/tags/${to}`}>{tag}</TagLink>    
  );
};

export default Tag;

import React from 'react';

import { POPULAR_TAGS } from './PopularTags.data';

import { TagTitle, Tag } from './PopularTags.styles';

const PopularTags = () => {
  return (
    <div>
      <TagTitle>인기 태그</TagTitle>
      <ul>
        {POPULAR_TAGS.slice(0, 10).map(tag => (
          <Tag># {tag}</Tag>
        ))}
      </ul>
    </div>
  );
};

export default PopularTags;

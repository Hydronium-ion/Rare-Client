import React, { useEffect } from 'react';

import PostCardList from '@/components/Common/PostCard/PostCardList.component';
import SearchResultInfo from './SearchResultInfo.component'

import { SEARCH_DATA } from './Search.data';

export interface SearchResultProps {
  keyword: string;
}

const SearchResult = ({ keyword }: SearchResultProps) => {
  const targetKeyword =  keyword.replace('?', '')

  const searchKeyword = SEARCH_DATA.filter(post => { 
    if( post.tags.filter(tag => tag === targetKeyword).length >= 1) return true 
     return false
    })

  useEffect(() => {
    
  }, [])

  return (
    <div>
      {
        keyword ?
        <SearchResultInfo count={searchKeyword.length} keyword={targetKeyword} /> : null
      }
      <PostCardList posts={searchKeyword} />
    </div>
  );
};

export default SearchResult;
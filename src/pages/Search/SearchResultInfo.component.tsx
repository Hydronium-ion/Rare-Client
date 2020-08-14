import React from 'react';

import { Info } from './SearchResultInfo.styles';

export interface SearchResultInfoProps {
  count: number;
  keyword: string;
}

const SearchResultInfo = ({ count, keyword }: SearchResultInfoProps) => {
  if (count === 0) {
    return <Info>검색 결과가 없습니다.</Info>;
  }
  return (
    <Info>
      <div>{`"${keyword}" 검색 결과`}</div>
      총 <b>{count}개</b>의 포스트를 찾았습니다.
    </Info>
  );
};

export default SearchResultInfo;
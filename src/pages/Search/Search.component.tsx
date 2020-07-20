import React from 'react';

import Input from '#Custom/Input/Input.component';

const Search = () => {
  return (
    <div>
      <Input
        onSearch={(queryString: string) => {
          console.log(queryString);
        }}
      />
    </div>
  );
};

export default Search;
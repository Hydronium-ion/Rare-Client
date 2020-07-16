import React, { useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';

import Icon from '#Icon/Icon.component';

import { debounce } from '@Utils/util';

import { InputContainer, InputBody } from './Input.styles';

export interface IInputContainerProp {
  focus: boolean;
}

interface IInputProp {
  onSearch: (searchQuery: string) => void;
}

const Input = ({ onSearch }: IInputProp) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const onClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const focusOn = () => setFocus(true);
  const focusOff = () => setFocus(false);

  const searchForDebounce = useMemo(() => {
    return debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, 2000);
  }, [onSearch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    searchForDebounce(value);
  };

  return (
    <InputContainer onClick={onClick} focus={focus}>
      <Icon icon="search" size="1.5rem" color={focus ? '#000' : '#adb5bd'} />
      <InputBody
        onChange={onChange}
        ref={inputRef}
        onFocus={focusOn}
        onBlur={focusOff}
        placeholder="검색어를 입력하세요"
      />
    </InputContainer>
  );
};

export default Input;

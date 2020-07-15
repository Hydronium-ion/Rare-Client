import styled, { css } from 'styled-components';

import { IInputContainerProp } from './Input.component';

const focusOff = css`
  border: 1px solid #adb5bd;
`;

const focusOn = css`
  border: 1px solid #000;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0 1.5rem;
  height: 4rem;
  margin: 0 auto;
  ${(props: IInputContainerProp) => (props.focus ? focusOn : focusOff)}
`;

export const InputBody = styled.input`
  margin-left: 1.25rem;
  width: 100%;
  font-size: 1.5rem;
`;

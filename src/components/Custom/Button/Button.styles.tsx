import styled, { css } from 'styled-components';
import {IButtonProp} from './Button.component'

const big = css`
  height: 2.5rem;
  font-size: 1.125rem;
`;

const medium = css`
  height: 2rem;
  font-size: 1rem;
`;

const primary = css`
  color: #fff;
  background-color: #1EA7FD;
  border: 1px solid #1EA7FD; 
  
`;

const secondary = css`
  color: #000;
  background-color: #E9ECEF;
  border: 1px solid #E9ECEF;
`;

const noOutline = css`
  color: #868E96;
  background-color: #fff;
  border: 1px solid #fff;
`;

const hover = css`
  color: #1EA7FD;
  background-color: #fff;
  border: 1px solid #1EA7FD;
  border-radius: 4px;
  :hover {
    color: #fff;
    background-color: #1EA7FD;  
    border-color: #1EA7FD;
  }
`;


const getButtonTheme = (props: IButtonProp) => {
  switch(props.theme) {
    case 'primary': 
      return primary;
    case 'secondary':
      return secondary;
    case 'noOutline':
      return noOutline;
    case 'hover' :
      return hover;
  }
}

const getButtonSize = (props: IButtonProp) => {
  switch(props.size) {
    case 'big': 
      return big;
    case 'medium':
      return medium;
  }
}

export const Button = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  font-weight: 500;
  height: 2rem;
  padding: 0 1.125rem;
  border-radius: 4px;
  box-sizing: border-box;
  ${getButtonSize}
  ${getButtonTheme}
`;
import React from 'react';
import Button from '@/components/Custom/Button/Button.component';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Icon from '@/components/Custom/Icon/Icon.component'
import styled from 'styled-components'



export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs]
};

export const button = () => {
  return (
    <Button theme="primary" size="medium">
      <span>출간하기</span> 
    </Button>
  );
};


export const hoverButton = () => {
  return (
    <Button theme="hover" size="medium">
      <Icon icon="unlock" color="#868E96" size="12" margin="0rem 0.75rem 0rem 0rem" />
      <span>새 글 작성</span> 
    </Button>
  );
};


export const customButton = () => {
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const theme = select('theme', ['primary', 'secondary', 'noOutline', 'hover'], 'primary');

  return (
    <Button size={size} theme={theme}>
      새 글 작성
    </Button>
  );
};


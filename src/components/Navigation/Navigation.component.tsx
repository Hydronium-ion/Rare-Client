import React, { useState } from 'react';

import Button from '#Custom/Button/Button.component';
import Icon from '#Custom/Icon/Icon.component';

import useSelectActives from '@Hooks/useSelectActives';
import { getEnumLength } from '@Utils/util';

import { Container, Spacing } from './Navigation.styles';

enum EButtonType {
  'TRENDING' = 0,
  'RECENT' = 1
}
const contentsLength = getEnumLength(EButtonType);

const Navigation = () => {
  const { actives, clickHandler } = useSelectActives<EButtonType>(contentsLength);

  return (
    <Container>
      <Button
        theme="navigation"
        size="medium"
        active={actives[EButtonType.TRENDING]}
        onClick={clickHandler(EButtonType.TRENDING)}>
        <Icon icon="fire" size="1rem" />
        <Spacing>트렌딩</Spacing>
      </Button>
      <Button
        theme="navigation"
        size="medium"
        active={actives[EButtonType.RECENT]}
        onClick={clickHandler(EButtonType.RECENT)}>
        <Icon icon="clock" size="1rem" />
        <Spacing>최신</Spacing>
      </Button>
    </Container>
  );
};

export default Navigation;

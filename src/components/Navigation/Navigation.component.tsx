import React, { useState } from 'react';

import Button from '@/components/Custom/Button/Button.component';
import Icon from '@/components/Custom/Icon/Icon.component';

import { Container, Spacing } from './Navigation.styles';

enum EButtonType {
  'TRENDING' = 0,
  'RECENT' = 1
}

const Navigation = () => {
  const [actives, setActives] = useState([true, false]);

  const clickHandler = (index: EButtonType) => () => {
    if (actives[index]) return;

    setActives(actives.map(active => !active));
  };

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

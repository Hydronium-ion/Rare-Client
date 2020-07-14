import React from 'react';

import Card from '@/components/Custom/Card/Card.component';

import { Container } from './CardList.styles';

import { CARD_DATA } from './CardList.data';

const CardList = () => {
  return (
    <Container>
      {CARD_DATA.map(cardData => (
        <Card {...cardData} />
      ))}
    </Container>
  );
};

export default CardList;

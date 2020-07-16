import React from 'react';

import Card from '#Custom/Card/Card.component';

import { Container } from './CardList.styles';

import { CARD_DATA } from './CardList.data';

const CardList = () => {
  return (
    <Container>
      {CARD_DATA.map((cardData, index) => (
        <Card {...cardData} key={index} />
      ))}
    </Container>
  );
};

export default CardList;

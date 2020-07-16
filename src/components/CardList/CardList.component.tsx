import React, { useEffect, useRef, useState } from 'react';

import Card from '#Custom/Card/Card.component';

import { Container } from './CardList.styles';

import { CARD_DATA } from './CardList.data';

const CardList = () => {
  
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const setRefTarget = (a: HTMLDivElement | null) => {
    setTarget(a);
  };
  const [card, setCard] = useState(CARD_DATA)
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '-100px -50px'
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.unobserve(entry.target);
        fetch('http://localhost:8080/todo')
          .then((res) => res.json())
          .then((res) => setCard([...card,...res]))
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);
    if (target) {
      io.observe(target);
    }
    return () => io.disconnect();
  }, [target]);

  return (
    <Container>
      {
        card.map((cardData, index) => {
          const lastElement = index === card.length - 1;
          return <Card {...cardData} key={index} refCard={lastElement ? setRefTarget : null} />
        })
      }
    </Container>
  );
};

export default CardList;

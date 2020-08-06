import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '#Custom/Card/Card.component';
import SkeletonCard from '#Custom/Card/SkeletonCard.component';

import { Container } from './CardList.styles';
import { SkeletonCardContainer } from '#Custom/Card/SkeletonCard.styles';

import { fetchBlogsStart } from '@/store/blog/blog.actions';
import IBlog from '@Types/Blog';
import { RootState } from '@/store/rootReducer';
import { findByLabelText } from '@testing-library/react';

const CardList = () => {
  const { blogs }: { blogs: null | IBlog[] } = useSelector((state: RootState) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogsStart());
  }, []);

  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const setRefTarget = (a: HTMLDivElement | null) => {
    setTarget(a);
  };

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
      {blogs ? (
        blogs.map((cardData, index) => {
          const lastElement = index === blogs.length - 1;
          return <Card {...cardData} key={index} refCard={lastElement ? setRefTarget : null} />;
        })
      ) : (
        <SkeletonCardContainer>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </SkeletonCardContainer>
      )}
    </Container>
  );
};

export default CardList;

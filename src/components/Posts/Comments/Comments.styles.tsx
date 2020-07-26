import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;
`;

export const Counts = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const CommentBox = styled.div`
  display: block;
`;

export const CommentTextarea = styled.textarea`
  height: 70px;
  resize: none;
  margin-bottom: 1.5rem;
  width: 100%;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 236, 239);
  border-image: initial;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 15rem;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 30%;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 2rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  border-left: 1px solid rgb(233, 236, 239);
  width: 80%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  color: rgb(73, 80, 87);
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  border-image: initial;
  background: white;
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ButtonWidth = css`
  width: 100%;
`;

export const SaveButton = styled.div`
  ${ButtonWidth}
  display: flex;
  justify-content: flex-end;
`;

export const ModifyButton = styled.div`
  ${ButtonWidth}
`;

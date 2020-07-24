import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

export const Menu = styled.div`
  font-weight: 900;
  width: 25%;
`;

export const InfoContainer = styled.div`
  display: flex;
  font-size: 32px;
  margin-bottom: 1rem;
`;

export const DefaultInfoContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

export const DefaultInfo = styled.div`
  width: 75%;
  font-size: 20px;
`;

export const About = styled.p`
  font-size: 20px;
`;

export const Modify = styled.input`
  display: block;
  box-sizing: border-box;
  color: rgb(73, 80, 87);
  font-size: 1rem;
  line-height: 1rem;
  width: 75%;
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
`;

export const ModifyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

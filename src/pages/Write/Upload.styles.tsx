import styled from 'styled-components';

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ModalTitleContainer = styled.div`
  margin: 1rem 0 0.8rem 1.2rem;
  font-weight: bold;
  color: #343A40;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 150px;
  background-color: #E9ECEF;
  border-radius: 4px;
`;

export const ModalTextarea = styled.textarea`
  padding: 1rem 1.05rem;
  width: 90%;
  min-height: 150px;
  margin-left: 0 auto;
  background-color: #E9ECEF;
  border-radius: 4px;
`;

export const PublicButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
 
export const TumbnailButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export const SubmitContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  width:100%;
  color: #fff;
  background-color: #1ea7fd;
  border: 1px solid #1ea7fd;
  border-radius: 4px;
`
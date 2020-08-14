import styled, { css } from 'styled-components';

interface IThumbnail {
  color: string;
}

export const PostCardContainer = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  background-image: url(${(props: IThumbnail) => props.color});
  height: 450px;
  background-size: cover;
  background-position-y: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const BlackOpacity = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  width:100%; 
  height:550px; 
  position: absolute;
`;

export const TitleTag = styled.div`
  color: #fff;
  font-weight: normal;
  text-align: center;
  z-index: 1000;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 26px;
  line-height: 38px;
  letter-spacing: -0.4px;
  color: #fff;
  font-weight: normal;
  font-family: 'Noto Sans Medium',AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,돋움;
  text-align: center;
  z-index: 1000;
  font-size: 2.5rem;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  span {
    font-size: 0.875rem;
    color: rgb(33, 37, 41);
    font-weight: bold;
  }
`;

export const PostInfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ViewsContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const LikesContainer = styled.span`
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
`;

export const UserInteractionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NumberContainer = styled.span`
  margin-left: 0.2rem;
`;

export const CreateAtInfo = styled.div`
  display: flex;

  p {
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
    margin-right: 1rem;
  }
`;
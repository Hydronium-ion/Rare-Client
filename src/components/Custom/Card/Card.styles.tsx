import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0 0.8rem 1rem 0;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 0.5rem 1rem;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  transition: border 0.3s, box-shadow 0.3s;
  cursor: pointer;

  :hover {
    border-color: transparent;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 1px) {
    width: 90vw;
    margin: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 42%;
    margin-left: calc((100% - 84%) / 3);
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    width: 30%;
    margin: 0;
    margin-left: calc((100% - 90%) / 4);
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    width: 24%;
    margin: 0;
    margin-left: calc((100% - (24% * 4)) / 5);
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardFooter = styled.div`
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInteractionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewsContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const LikesContainer = styled.span`
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
`;

export const ThumbnailContainer = styled.div`
  margin: 0.5rem 0;
  height: 3rem;
  width: 100%;
  position: relative;
  padding-top: 40%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.h1`
  margin: 0 0 0.5rem 0; /* margin 글로벌설정후 삭제 */
  font-size: 1.2rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  font-weight: normal;
`;

export const CardContents = styled.p`
  margin: 0; /* margin 글로벌설정후 삭제 */
  overflow: hidden;
  white-space: normal;
  line-height: 1.3rem;
  color: #777;
  height: 5.2rem;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const UserName = styled.span`
  margin: 0 0.3rem;
`;
export const NumberContainer = styled.span`
  margin-left: 0.2rem;
`;

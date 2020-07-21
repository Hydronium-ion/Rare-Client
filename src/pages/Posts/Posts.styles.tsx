import styled, { css } from 'styled-components'

export const PostsContainer = styled.div`
  position: relative;
  margin-top: 5rem;
  
`;

export const LeftContent = styled.div`
  position: absolute;
  /* position: fixed; */
  left: 5rem;
`;

export const IconContainer = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D3EDFD;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 2rem;
  padding: 0.5rem;
`

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(248, 249, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 50%;
  padding: 0.5rem;
`
export const LikesNumberContainer = styled.div`
  margin: 0.5rem 0 0.8rem;
  span {
    font-size: 0.8rem;
  }
`

export const MainContent = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const RightContent = styled.div`
  position: absolute;
  right: 0rem;
  width: 270px;
  display:flex;
  flex-direction: column;
  color: rgb(134, 142, 150);
  div {
    padding: 0 0.8rem;
    margin-left: 2rem;
    border-left: 2px solid rgb(233, 236, 239);
  }
  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

export const PostTitle = styled.h2`
  font-size: 3rem;
  line-height: 4rem;
  margin-bottom: 2rem;
`;

export const TagContainer = styled.div`
  margin-top: 1rem;
`;

export const PostCreate = styled.div`
  margin-left: 0.8rem;
  font-weight: bold;
`;

export const Tag = styled.div`
  margin-bottom: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  margin-right: 0.875rem;
  color: #1263CE;
  font-weight: 500;
  font-size: 1rem;
  background: rgb(241, 243, 245);
  border-radius: 1rem;
  text-decoration: none;
`;

export const PostContentContainer = styled.div`
  border-top: 2px solid #E9ECEF;
  padding: 2rem 0;
  width: 100%;
  img {
    width: 100%
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #E9ECEF;
  padding: 2rem 0;
  margin-bottom: 4rem;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: bold;
`;

export const NextPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const postBox = css`
  cursor: pointer;
  display: flex;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  align-items: center;
  background: rgb(248, 249, 250);
  text-decoration: none;
`

export const PrevPostBox = styled.div`
  ${ postBox }
  justify-content: flex-start;
`

export const NextPostBox = styled.div`
  ${ postBox }
  justify-content: flex-end;
`

export const PostBox = styled.div`
  margin: 0 1rem;
`

export const PostMenu = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: rgb(73, 80, 87);
`

export const PostMenuTitle = styled.h3`
  width: 100%;
  font-size: 1.125rem;
  color: rgb(73, 80, 87);
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0.5rem 0px 0px;
`

export const CommentContainer = styled.div`
  margin-bottom: 4rem;
`

export const CommentNumber = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
`

export const CommentBox = styled.div`
  display: block;
`

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
`

export const CommentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
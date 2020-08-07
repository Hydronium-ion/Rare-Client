import styled from 'styled-components';

export const CommentsListContainer = styled.div`
  border-top: 1px solid rgb(233, 236, 239);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 14px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateAt = styled.div`
  margin-top: 0.4rem;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const CommentWrap = styled.div`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const UserProfile = styled.div`
  display: flex;
`;

export const EditCommentContainer = styled.div`
  span {
    cursor: pointer;
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
    margin-left: 0.5rem;
    :hover {
      color: rgb(173, 181, 189);
      text-decoration: underline;
    }
  }
`;
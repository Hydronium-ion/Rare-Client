import styled, { css } from 'styled-components';

const githubMarkdownCss = css``;

export const WriteContainer = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  justify-content: space-between;
`;

export const PreviewContainer = styled.div`
  ${githubMarkdownCss}
`;

export const WriteSection = styled.div`
  width: 100%;
`;

export const MarkdownTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const WriteTitle = styled.input`
  display: block;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
  padding: 0px;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

export const WriteFooter = styled.div`
  /* border-top: 2px solid #E9ECEF;
  padding-top: 1rem */
  display: flex;
  justify-content: space-between;
`;

export const WriteScreen = styled.div`
  /* width: 100%; */
`;

export const MarkdownScreen = styled.div`
  height: calc(100% - 181.94px);
  width: 600px;
`;

export const TagContainer = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
`;

export const TagInput = styled.input`
  display: inline-flex;
  cursor: text;
  font-size: 1.125rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  min-width: 8rem;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

export const MarkdownPreivewContainer = styled.div`
  overflow-y: scroll;
  min-width: 600px;
  max-width: 600px;
`;

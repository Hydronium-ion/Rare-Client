import React, { useState } from 'react';
import marked from 'marked';
import hljs from "highlight.js";

import Button from '#Custom/Button/Button.component';
import {WriteContainer, WriteTitle, WriteScreen, WriteSection, MarkdownPreivewContainer, TagContainer, TagInput, WriteFooter, MarkdownScreen, PreviewContainer, MarkdownTextArea} from './Write.styles';

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function(code) {
    return hljs.highlightAuto(code, ["html", "javascript", "java", "swift"]).value;
  }
});


const Preview = (props: any) => {
  return (
    <PreviewContainer className="markdown-body">
      <div dangerouslySetInnerHTML={{__html:marked(props.html)}} />
    </PreviewContainer>
  )
}

const Editor = (props: any) => {
  return (
    <MarkdownTextArea placeholder="내용을 입력하세요" value={props.code} onChange={(e)=>
      {props.onChange(e.target.value);}}>
      {props.code}
    </MarkdownTextArea>
  )
}

const Write = () => {
  const [text, setText] = useState('');

  const handleChange = (text: any) => {
    setText(text)
  }

  return (
    <WriteContainer>
      <WriteScreen>
        <WriteSection>
          <WriteTitle type="text" placeholder="제목을 입력하세요" />
          <TagContainer>
            <TagInput placeholder="태그를 입력하세요" />
          </TagContainer>
        </WriteSection>
        <MarkdownScreen>
          <Editor 
            code={text} 
				    onChange={handleChange} />
        </MarkdownScreen>
        <WriteFooter>
          <Button theme="noOutline" size="big">나가기</Button>
          <Button theme="primary" size="big">작성하기</Button>
        </WriteFooter>
      </WriteScreen>

      <MarkdownPreivewContainer>
        <Preview html={text} />
      </MarkdownPreivewContainer>
    </WriteContainer>
  );
};

export default Write;
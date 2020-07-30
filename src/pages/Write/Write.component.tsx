import React, { useState, useRef, forwardRef, useLayoutEffect, useEffect } from 'react';
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import marked from 'marked';
import hljs from 'highlight.js';

import Modal from '#/Common/Modal/Modal.component';
import Button from '#Custom/Button/Button.component';
import Upload from './Upload.component';
import DragAndDrop from '#Custom/DragAndDrop/DragAndDrop.component';

require('codemirror/lib/codemirror.js');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/paraiso-light.css');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/addon/display/placeholder');

import {
  WriteContainer,
  WriteTitle,
  WriteScreen,
  WriteSection,
  MarkdownPreivewContainer,
  TagContainer,
  TagInput,
  WriteFooter,
  MarkdownScreen,
  PreviewContainer,
  MarkdownTextArea
} from './Write.styles';

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function(code) {
    return hljs.highlightAuto(code, ['html', 'javascript', 'java', 'swift']).value;
  }
});

const Preview = (props: any) => {
  return (
    <PreviewContainer className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: marked(props.html) }} />
    </PreviewContainer>
  );
};

const Editor = forwardRef<HTMLTextAreaElement, any>((props, ref) => {
  return (
    <MarkdownTextArea
      placeholder="내용을 입력하세요"
      value={props.code}
      onChange={e => {
        props.onChange(e.target.value);
      }}
      ref={ref}>
      {props.code}
    </MarkdownTextArea>
  );
});

const Write = () => {
  const [text, setText] = useState('123123');
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | ArrayBuffer | null>(null);
  const [codemirror, setCodemirror] = useState<EditorFromTextArea | null>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const readFileAndSetPreviewImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      //addImageToTextarea(reader.result)
      addImageToTextarea('https://t1.daumcdn.net/cfile/tistory/99FA744F5AE9BFA918');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      readFileAndSetPreviewImage(selectedFile);
    }
  }, [selectedFile]);

  useLayoutEffect(() => {
    if (editorRef.current) {
      const tmp = CodeMirror.fromTextArea(editorRef.current, {
        mode: 'markdown',
        lineWrapping: true,
        theme: 'paraiso-light',
        value: text
      });
      tmp.on('change', handleChange);
      // tmp.on('cursorActivity', instance => {
      //   const test = instance.getDoc().getCursor();

      //   instance.getDoc().setCursor(test);
      // });

      setCodemirror(tmp);
    }
  }, []);

  const addImageToTextarea = (image: string) => {
    if (codemirror) {
      codemirror.focus();
      const doc = codemirror.getDoc();
      const cursor = doc.getCursor();
      //console.log('image cursor', cursor);
      doc.replaceRange(`![](${encodeURI(image)})`, cursor);
      //codemirror.getDoc().replaceSelection(`![](${encodeURI(image)})`);
    }
  };

  const handleChange = (doc: CodeMirror.Editor) => {
    setText(doc.getValue());
  };

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const addImageToEditor = (image: string) => {};

  return (
    <WriteContainer>
      {visible && (
        <Modal closable={true} maskClosable={true} onClose={closeModal} visible={visible}>
          <Upload />
        </Modal>
      )}
      <WriteScreen>
        <WriteSection>
          <WriteTitle type="text" placeholder="제목을 입력하세요" />
          <TagContainer>
            <TagInput placeholder="태그를 입력하세요" />
          </TagContainer>
        </WriteSection>
        <MarkdownScreen>
          <DragAndDrop dropCallback={handleFileChange}>
            <Editor code={text} ref={editorRef} />
          </DragAndDrop>
        </MarkdownScreen>
        <WriteFooter>
          <Button theme="noOutline" size="big">
            나가기
          </Button>
          <Button theme="primary" size="big" onClick={openModal}>
            작성하기
          </Button>
        </WriteFooter>
      </WriteScreen>
      <MarkdownPreivewContainer>
        <Preview html={text} />
      </MarkdownPreivewContainer>
    </WriteContainer>
  );
};

export default Write;

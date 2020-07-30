import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import CodeMirror, { EditorFromTextArea } from 'codemirror';

require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/lib/codemirror.js');
require('codemirror/lib/codemirror.css');

const CodeEditor = () => {
  const [text, setText] = useState('123');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  let codemirror: EditorFromTextArea | null = null;

  const handleChange = (doc: CodeMirror.Editor) => {
    setText(doc.getValue());
  };
  useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      codemirror = CodeMirror.fromTextArea(textAreaRef.current, {
        mode: 'markdown',
        lineNumbers: true
      });
      codemirror.on('change', handleChange);
    }
  }, []);
  return (
    <div>
      <textarea ref={textAreaRef} />
    </div>
  );
};

export default CodeEditor;

import React from 'react';
import CodeEditor from '#Custom/CodeMirror/CodeMirror.component';
import CodeMirror, { EditorFromTextArea } from 'codemirror';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'custom|Card',
  component: CodeEditor,
  decorators: [withKnobs]
};

export const codeEditor = () => {
  return <CodeEditor />;
};

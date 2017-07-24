/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from './Components/MyEditor.js'
import {Editor, EditorState} from 'draft-js';




ReactDOM.render(
  <MyEditor />,
  document.getElementById('root')
);

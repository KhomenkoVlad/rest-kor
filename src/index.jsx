import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/router';
import './scripts/i18n';

let rootApp = document.getElementById("root");

ReactDOM.render(<App />, rootApp); 
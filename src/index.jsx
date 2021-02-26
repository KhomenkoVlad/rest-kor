import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/router';
import './scripts/i18n';

let reactApp = document.createElement("div");
reactApp.classList.add('app');
document.body.prepend(reactApp);

ReactDOM.render(<App />, reactApp);
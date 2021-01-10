import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/router';

let reactApp = document.createElement("div");
document.body.appendChild(reactApp);

ReactDOM.render(<App />, reactApp);
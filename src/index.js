import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import makeStore from './redux/store';
import 'rxjs';

const store = makeStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();

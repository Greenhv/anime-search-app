import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import Detail from '../Detail';
import './styles/index.css';
import 'bulma/css/bulma.css'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/anime/:animeSlug" component={Detail} />
      </div>
    </Router>
  </Provider>
)

App.displayName = 'App';

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;

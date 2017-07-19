import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h1 className="title">Animes</h1>
        <div>
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Search..." />
          </div>
        </div>
        <Link to='/anime/humo'>Humo</Link>
      </div>
    );
  }
}

export default Home;

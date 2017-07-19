import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../Input';
import { isSearching } from '../../redux/modules/search';

class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    search: PropTypes.func,
  };

  render() {
    const {
      search,
    } = this.props;

    return (
      <div>
        <h1 className="title">Animes</h1>
        <div>
          <label className="label">Name</label>
          <div className="control">
            <Input type="text" placeholder="Search..." onKeyUp={(e) => { search(e.target.value) }} />
          </div>
        </div>
        <Link to='/anime/humo'>Humo</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (text) => {
        dispatch(isSearching(text));
    },
  };
};

const mapStateToProps = ({ state }) => ({
  prop: state.prop
});


export default connect(null, mapDispatchToProps)(Home);

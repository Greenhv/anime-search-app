import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List as ImmutableList } from 'immutable';
import Input from '../Input';
import List from '../List';
import { isSearching } from '../../redux/modules/search';

class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    search: PropTypes.func,
    animes: PropTypes.instanceOf(ImmutableList),
  };

  render() {
    const {
      search,
      animes,
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
        <List items={animes} />
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

const mapStateToProps = ({ search }) => ({
  animes: search.get('values'),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

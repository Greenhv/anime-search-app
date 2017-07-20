import React from 'react';
import PropTypes from 'prop-types';
import { List as ImmutableList } from 'immutable';
import ListItem from '../ListItem';

const List = ({ items }) => {
  return (
    <div>
      { 
        items.map(item => (
          <ListItem item={item} key={item.id} />
        ))
      }
    </div>
  );
};

List.displayName = 'List';

List.propTypes = {
  items: PropTypes.instanceOf(ImmutableList),
};

export default List;

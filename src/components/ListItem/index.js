import React from 'react';
import PropTypes from 'prop-types';
import AnimeRecord from '../../models/anime';

const ListItem = ({ item }) => {
  return (
    <div>
      {item.title}
    </div>
  );
};

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  item: PropTypes.instanceOf(AnimeRecord),
};

export default ListItem;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Square = (props) => {
  const { value, onClick } = props;

  return (
    <button
      type="button"
      style={styles.square}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
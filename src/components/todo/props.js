import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onCheck: PropTypes.func,
}

export const defaultProps = {
  onCheck: () => {},
};

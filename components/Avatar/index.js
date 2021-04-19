import PropTypes from 'prop-types';

import styles from './style';

const Avatar = ({ photoURL, displayName }) => (
  <>
    <div>
      <img src={photoURL} />
      <span>{displayName}</span>
    </div>
    <style jsx>{styles}</style>
  </>
);

Avatar.propTypes = {
  photoURL: PropTypes.string,
  displayName: PropTypes.string,
};

Avatar.defaultProps = {
  photoURL: '',
  displayName: '',
};

export default Avatar;

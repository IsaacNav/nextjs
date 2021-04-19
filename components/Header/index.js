import { Typography } from '@material-ui/core';

import styles from './style';

const Header = () => {
  return (
    <>
      <div className="root">
        <Typography variant="h3">Inicio</Typography>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Header;

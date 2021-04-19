import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getUserState } from 'firebase/client';

const LoginRoute = ({ component: Component, path = '/' }) => {
  const router = useRouter();
  const [user, setUser] = useState('');

  useEffect(() => {
    getUserState(setUser);
  }, [getUserState, setUser]);

  useEffect(() => {
    if (user) router.replace(path);
  }, [user]);

  return !user && <Component />;
};

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
};

export default LoginRoute;

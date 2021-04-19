import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getUserState } from 'firebase/client';

const PrivateRoute = ({ component: Component }) => {
  const router = useRouter();
  const [user, setUser] = useState('');

  useEffect(() => {
    getUserState((user) => {
      if (!user) router.replace('/');
      setUser(user);
    });
  }, [getUserState]);

  return user && <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;

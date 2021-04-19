import { useEffect, useState } from 'react';
import { getUserState } from 'firebase/client';

import styles from './style';

const Login = () => {
  const [, setUser] = useState(1);

  useEffect(() => {
    getUserState(setUser);
  }, []);

  return (
    <>
      <section>Hola mundo</section>
      <style jsx>{styles}</style>
    </>
  );
};

export default Login;

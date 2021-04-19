import { useCallback, useEffect, useState } from 'react';

import Button from 'components/Button';
import VercelIcon from 'icons/VercelIcon';

import { githubLoginStrategy, getUserState } from 'firebase/client';

import styles from './style';
import Avatar from 'components/Avatar';

const Login = () => {
  const [user, setUser] = useState(1);

  const handleOnClick = useCallback(() => githubLoginStrategy(), [
    githubLoginStrategy,
  ]);

  useEffect(() => {
    getUserState(setUser);
  }, []);

  console.log(user);
  return (
    <>
      <section>
        <VercelIcon />
        <h2>Talk about development</h2>
        {user === 1
          ? null
          : user && (
              <Avatar photoURL={user.photoURL} displayName={user.displayName} />
            )}
        {!user && <Button onClick={handleOnClick}>Login with github</Button>}
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default Login;

import Head from 'next/Head';
import AppWrapper from '@com/AppWrapper';
import PrivateRoute from '@com/PrivateRoute';

import Home from '@con/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppWrapper>
        <PrivateRoute component={Home} />
      </AppWrapper>
    </>
  );
};

export default HomePage;

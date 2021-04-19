import Head from 'next/Head';

import AppWrapper from '@com/AppWrapper';
import LoginRoute from '@com/LoginRoute';

import Login from '@con/Login';

const App = () => (
  <>
    <Head>
      <title>Login page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppWrapper>
      <LoginRoute component={Login} path="/home" />
    </AppWrapper>
  </>
);

export default App;

import { Provider } from 'react-redux';

import store from 'store';

import styles, { globalStyles } from './styles';

// eslint-disable-next-line react/prop-types
const AppWrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <main>
            <div className="box">{children}</div>
          </main>
        </div>
      </Provider>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default AppWrapper;

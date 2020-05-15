import React from 'react';

import GlobalStyles from './styles/global';

import Router from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;

import React from 'react';

import GlobalStyles from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
};

export default App;

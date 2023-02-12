import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header } from './pages/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Home />
    </RecoilRoot>
  );
}

export default App;

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from './src/app/Home';

export default function App() {
  return (
    <>
      <StatusBar translucent={true} style="light" />
      <Home/>
    </>

  );
}



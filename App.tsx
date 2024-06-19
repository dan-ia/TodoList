import * as React from 'react';

import Home from './src/screens/app/Home/index';
import { Splash } from "./src/screens/splash/splash";
import { useState } from "react";
import { preventAutoHideAsync } from 'expo-splash-screen';


preventAutoHideAsync()

export default function App() {

  const [splashComplete, setSplashComplete] = useState(false);

  return (

    splashComplete ? <Home /> : <Splash onComplete={setSplashComplete} />
  );
}



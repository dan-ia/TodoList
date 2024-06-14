import * as React from 'react';

import Home from '../src/screens/app/Home';
import { Splash } from "./screens/splash/splash";
import { useState } from "react";
import { preventAutoHideAsync } from 'expo-splash-screen';


preventAutoHideAsync()

export default function App() {

  const [splashComplete, setSplashComplete] = useState(false);

  return (

    splashComplete ? <Home /> : <Splash onComplete={setSplashComplete} />
  );
}



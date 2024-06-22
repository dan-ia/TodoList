import * as React from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Splash } from "./src/app/pages/Splash/splash";
import { useState } from "react";

import { preventAutoHideAsync } from 'expo-splash-screen';
import Routes from './src/app/routes';

preventAutoHideAsync()

export default function App() {

  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        splashComplete ? <Routes /> : <Splash onComplete={setSplashComplete} />
      }
    </GestureHandlerRootView>
  );
}
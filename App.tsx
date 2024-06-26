import { useState } from "react";
import * as React from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { preventAutoHideAsync } from 'expo-splash-screen';


import {
  useFonts,
  DidactGothic_400Regular,
} from "@expo-google-fonts/didact-gothic"

import { Splash } from "./src/app/pages/Splash/splash";
import Routes from './src/app/routes';

preventAutoHideAsync()

export default function App() {

  const [splashComplete, setSplashComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    DidactGothic_400Regular,
  });

  if (!fontsLoaded) {
    return <Splash onComplete={setSplashComplete} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        splashComplete ? <Routes /> : <Splash onComplete={setSplashComplete} />
      }
    </GestureHandlerRootView>
  );
}
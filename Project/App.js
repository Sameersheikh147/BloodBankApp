/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



// import Home from './src/Components/Home'

import Navigation from '../Project/config/navigation'

import Home from '../Project/src/Screens/Home'

const App = () => {
  return (
   <Navigation />
  );
};



export default App;

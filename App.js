import {StyleSheet, View} from 'react-native';
import React from 'react';
import {StackNavigation} from 'react-navigation';
import Welcome from './src/Screen/Welcome/index.js';
import Information1 from './src/Screen/Information1/index.js';
import Information2 from './src/Screen/Information2/index.js';
import Information3 from './src/Screen/Information3/index.js';
import Information4 from './src/Screen/Information4/index.js';
import InformationLight from './src/Screen/InformationLight/index.js';
import InformationDark from './src/Screen/InformationDark/index.js';
import InformationDarkDefaul from './src/Screen/InformationDarkDefaul/index.js';
import Done from './src/Screen/Done/index.js';
import Error from './src/Screen/Error/index.js';

const App = () => {
  return (
    <View>
      <Information4 />
      <Information2 />
      <Information3 />
      <InformationDarkDefaul />
      <InformationLight />
      <InformationDark />
      <Done />
      <Error />
      <Information1 />
      <Welcome />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

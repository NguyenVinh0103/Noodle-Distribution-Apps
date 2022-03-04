import {StyleSheet, View} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/Screen/Welcome/index.js';
import SignIn from './src/Screen/SignIn/index.js';
import Register from './src/Screen/Register/index.js';
import Done from './src/Screen/Done/index.js';
import Information1 from './src/Screen/Information1/index.js';
import Information2 from './src/Screen/Information2/index.js';
import Information3 from './src/Screen/Information3/index.js';
import Information4 from './src/Screen/Information4/index.js';
import InformationLight from './src/Screen/InformationLight/index.js';
import InformationDark from './src/Screen/InformationDark/index.js';
import InformationDarkDefaul from './src/Screen/InformationDarkDefaul/index.js';
import OutOfNoodle from './src/Screen/OutOfNoodle/index.js';

import Error from './src/Screen/Error/index.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false  }}/>
        <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false  }}/>
        <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false  }}/>
        <Stack.Screen name="Done" component={Done}  options={{ headerShown: false  }}/>
        <Stack.Screen name="Information1" component={Information1} options={{ headerShown: false  }} />
        <Stack.Screen name="Information2" component={Information2} options={{ headerShown: false  }} />
        <Stack.Screen name="Information3" component={Information3} options={{ headerShown: false  }} />
        <Stack.Screen name="Information4" component={Information4} options={{ headerShown: false  }} />
        <Stack.Screen name="InformationLight" component={InformationLight} options={{ headerShown: false  }} />
        <Stack.Screen name="InformationDark" component={InformationDark} options={{ headerShown: false  }} />
        <Stack.Screen name="InformationDarkDefaul" component={InformationDarkDefaul} options={{ headerShown: false  }} />
        <Stack.Screen name="Error" component={Error} options={{ headerShown: false  }} />
        <Stack.Screen name="OutOfNoodle" component={OutOfNoodle} options={{ headerShown: false  }} />
      </Stack.Navigator>
    </NavigationContainer>


    // <View>
    //   <Information4 />
    //   <Information2 />
    //   <Information3 />
    //   <InformationDarkDefaul />
    //   <InformationLight />
    //   <InformationDark />
    //   <Done />
    //   <Error />
    //   <Information1 />
    //   <Welcome />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});

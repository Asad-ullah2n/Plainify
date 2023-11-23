import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './src/screens/auth/Onboarding/Onboarding';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="onBoarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Sign In" component={Signin} />
        <Stack.Screen name="Sign Up" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

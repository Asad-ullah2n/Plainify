import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <AuthNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

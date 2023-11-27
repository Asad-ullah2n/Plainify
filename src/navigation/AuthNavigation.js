import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import Onboarding from '../screens/auth/Onboarding/Onboarding';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';
import {auth} from '../../firebase.config';
import Home from '../screens/Home';
import Tasks from '../screens/Tasks';
import AddTask from '../screens/AddTask';
import DrawerContent from '../components/DrawerContent';
import Icon from '../components/Icon';
import {color} from '../constants/color';
import setUser from '../Redux/userSlice';
export const logoutHandler = () => {
  auth.signOut().then(() => console.log('User signed out!'));
};
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  const [initializing, setInitializing] = React.useState(true);
  const user = useSelector(state => state.data.user);
  console.log('user->>>', user);
  const dispatch = useDispatch();

  function onAuthStateChanged(authUser) {
    dispatch(setUser(authUser));
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  console.log('users', user);

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name={'home'} size={30} color={color.blue} />
              ) : (
                <Icon name={'home-outline'} size={30} color={color.midGrey} />
              ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name={'calendar-blank'} size={25} color={color.blue} />
              ) : (
                <Icon
                  name={'calendar-blank-outline'}
                  size={25}
                  color={color.midGrey}
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  };
  if (user) {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Add task" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  if (initializing) return null;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="onBoarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Sign In" component={Signin} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;

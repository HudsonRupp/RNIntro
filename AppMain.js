import React, {Component, useEffect} from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/Authenticated/HomeScreen';
import WelcomeScreen from './Screens/Unauthenticated/WelcomeScreen';
import PrivacyScreen from './Screens/Authenticated/PrivacyScreen';
import AgreementScreen from './Screens/Authenticated/AgreementScreen';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/Unauthenticated/LoginScreen';
import { useSelector, useDispatch } from 'react-redux';
import {readValue, storeValue} from './Helpers';
import {logIn} from './store/slices/AuthenticationSlice/index'
import {dark, light} from './store/slices/ThemeSlice/index'
const Stack = createNativeStackNavigator();

const authScreens = [<AgreementScreen />, <HomeScreen />];

function AppMain() {
  const loggedIn = useSelector(state => state.authentication.authStatus);
  const dispatch = useDispatch();


  useEffect(() => {

    async function getData() {
      
      user = await readValue("@user")
      theme = await readValue("@theme")

      if (user.username && user.agreementCompleted) {
        dispatch(logIn());
      }

      if (theme == "dark") {
        dispatch(dark());
      } else {
        dispatch(light())
      }
    }

    getData();

  }, [])

  return(
    <>
        <NavigationContainer>
          
          <Stack.Navigator screenOptions={{
              headerShown: false
              
            }}
          >
          {loggedIn ? (
            <>
              <Stack.Screen name="AgreementScreen" component={AgreementScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen}  />
            </>
            
          ) : (
            <>
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </>
          )}
          </Stack.Navigator>
        </NavigationContainer>
        {loggedIn ? <PrivacyScreen/> : null}
      </>
  
  )
}


export default AppMain;

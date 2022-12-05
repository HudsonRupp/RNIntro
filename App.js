import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
class mainApp extends Component {
  constructor() {
    super();
    this.state = {
      currentScreen: (
        <LoginScreen changeScreen={screen => this.changeScreen(screen)} />
      ),
    };
  }
  changeScreen(screen) {
    console.log(screen);
    this.setState({
      currentScreen: screen,
    });
  }
  render() {
    return this.state.currentScreen;
  }
}

export default mainApp;

import React from 'react';
import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useAppState} from '../../Hooks/useAppState';
const PrivacyScreen = props => {
  const appState = useAppState();

  return appState.match(/inactive|background/) ? (
    <BlurView
      style={styles.absolute}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    />
  ) : null;
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default PrivacyScreen;

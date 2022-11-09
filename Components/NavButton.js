import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const NavButton = props => {
  return (
    <View style={styles.navButton}>
      <Button
        onPress={() => {
          props.onChange(props.url);
        }}
        title={props.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  navButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
});

export default NavButton;

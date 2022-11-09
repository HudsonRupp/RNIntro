import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import NavButton from './NavButton';

const GroupedNavigation = props => {
  return (
    <View style={{alignItems: 'center', paddingBottom: 50}}>
      <View></View>
      <ScrollView horizontal={true} style={{}}>
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="Social Media"
          url="socialMedia"
        />
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="MISC"
          url="misc"
        />
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="Search Engines"
          url="search"
        />
      </ScrollView>
      <TextInput
        style={styles.textInput}
        defaultValue={props.current}
        autoCorrect={false}
        autoCapitalize={false}
        onSubmitEditing={e => {
          props.onChange(e.nativeEvent.text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 300,
  },
});

export default GroupedNavigation;

import React, {Component, useState} from 'react';
import {StyleSheet, TextInput, View, ScrollView} from 'react-native';
import NavButton from './NavButton';

const GroupedNavigation = props => {
  return (
    <View style={styles.main}>
      <View></View>
      <ScrollView horizontal={true}>
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="Social Media"
          url="socialMedia"
          file={require('./icons/chat.png')}
        />
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="MISC"
          url="misc"
          file={require('./icons/threedots.png')}
        />
        <NavButton
          onChange={i => props.switchGroup(i)}
          title="Search Engines"
          url="search"
          file={require('./icons/search.png')}
        />
      </ScrollView>
      <TextInput
        style={styles.textInput}
        defaultValue={props.htmlActive ? '-HTML-' : props.current}
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
  main: {
    alignItems: 'center',
    paddingBottom: 50,
  },
});

export default GroupedNavigation;

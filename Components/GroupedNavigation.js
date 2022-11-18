import React, {useState} from 'react';
import {StyleSheet, TextInput, View, ScrollView} from 'react-native';
import NavButton from './NavButton';

const GroupedNavigation = props => {
  const [buttonActive, setButtonActive] = useState(null);
  return (
    <View style={styles.main}>
      <View></View>
      <ScrollView horizontal={true}>
        <NavButton
          onChange={i => {
            props.switchGroup(i);
            setButtonActive(0);
          }}
          title="Social Media"
          url="socialMedia"
          icon="comments"
          active={buttonActive == 0 && props.sgActive}
        />
        <NavButton
          onChange={i => {
            props.switchGroup(i);
            setButtonActive(1);
          }}
          title="MISC"
          url="misc"
          icon="ellipsis-h"
          active={buttonActive == 1 && props.sgActive}
        />
        <NavButton
          onChange={i => {
            props.switchGroup(i);
            setButtonActive(2);
          }}
          title="Search Engines"
          url="search"
          icon="search"
          active={buttonActive == 2 && props.sgActive}
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

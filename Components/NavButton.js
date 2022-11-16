import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const NavButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onChange(props.url);
      }}
      style={props.active ? styles.navButtonActive : styles.navButton}>
      {props.file ? (
        <Image source={props.file} style={styles.img} />
      ) : (
        <Text>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  navButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  navButtonActive: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ededed'
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
});
export default NavButton;

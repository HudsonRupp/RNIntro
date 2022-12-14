import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const NavButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onChange(props.url);
      }}
      style={props.darkMode ? styles.navButtonDark : styles.navButton}>
      {props.icon ? (
        <Icon
          name={props.icon}
          size={30}
          color={props.active ? '#0b02f7' : props.darkMode ? '#ffffff' : '#000000'}
        />
      ) : (
        <Text style={props.darkMode ? styles.textDark : styles.text}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  navButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  navButtonDark: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    paddingHorizontal: 30,
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
  text: {
    color: '#000000',
  },
  textDark: {
    color: "#ffffff"
  }
});

/*<Image source={props.file} style={styles.img} />*/
export default NavButton;

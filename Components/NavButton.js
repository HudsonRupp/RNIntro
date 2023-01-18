import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import themes from '../Constants';
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
          color={
            props.active
              ? themes.universal.link
              : props.darkMode
              ? themes.dark.text
              : themes.light.text
          }
        />
      ) : (
        <Text style={props.darkMode ? styles.textDark : styles.text}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  navButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.background,
    paddingHorizontal: 30,
  },
  navButtonDark: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.dark.background,
    paddingHorizontal: 30,
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
  text: {
    color: themes.light.text,
  },
  textDark: {
    color: themes.dark.text,
  },
});

/*<Image source={props.file} style={styles.img} />*/
export default NavButton;

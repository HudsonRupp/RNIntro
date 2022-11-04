import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Board from './Components/Board';
import Demo from './Components/Demo';
import Web from './Components/Web';

class mainApp extends Component {
  render() {
    return (
      <ScrollView>
        <Wrapper header="Tic-Tac-Toe">
          <Board />
        </Wrapper>
        <Wrapper header="Demo">
          <Demo />
        </Wrapper>
        <Wrapper childStyle={styles.web} header="WebView">
          <Web />
        </Wrapper>
      </ScrollView>
    );
  }
}

const Wrapper = props => {
  return (
    <View>
      <View style={{borderBottomWidth: 1, marginHorizontal: 70}}>
        <Text style={styles.header}>{props.header}</Text>
      </View>
      {/* if child style prop is set, use that, */}
      <View
        style={
          props.childStyle === undefined ? styles.container : props.childStyle
        }>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
  },
  header: {
    fontSize: 40,
    marginTop: 30,
    textAlign: 'center',
    padding: 0,
  },
  web: {
    marginBottom: 50,
  },
});

export default mainApp;

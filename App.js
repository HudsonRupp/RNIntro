
import React, {Component, useState} from 'react';
import {Alert, FlatList, StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
import Board from './Components/Board';
import Demo from  './Components/Demo';
import { WebView } from 'react-native-webview'
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    margin:5
  },
  header: {
    fontSize: 40,
    marginTop: 30, 
    textAlign: 'center', 
    padding:0,
  }
})


class mainApp extends Component {
  render() {
    return(
      <ScrollView>
        <View style={{borderBottomWidth:1, marginHorizontal: 70}}>
          <Text style={styles.header}>
            Tic-Tac-Toe
          </Text>
        </View>
        <View style={styles.container}>
          <Board/>
        </View>
        <View style={{borderBottomWidth:1, marginHorizontal: 70}}>
          <Text style={styles.header}>
            Demo
          </Text>
        </View>
        <View style={styles.container}>
          <Demo/>
        </View>
        <View style={{borderBottomWidth:1, marginHorizontal: 70}}>
          <Text style={styles.header}>
            WebView
          </Text>
        </View>
        <View style={{marginBottom:50}}>
          <Web/>
        </View>
        
      </ScrollView>
    )
  }
}
class Web extends Component {
  render() {

    return (
      <View style={{borderWidth: 1,borderRadius:5, flex: 1, height: 300, margin:20, padding:20, marginTop: 10}}>
        <WebView source={{uri: "http://google.com" }}/>
      </View>
    )
  }
}

 
 export default mainApp;
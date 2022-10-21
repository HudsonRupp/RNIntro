
import React, {Component, useState} from 'react';
import { Alert, FlatList, StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'

//nav + file upload?

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, borderRadius: 10, padding: 5
    }
})

class Web extends Component {
    constructor() {
        super()
        
        this.state = {
            url: "http://google.com"
        }
    }

    changeUrl(url) {
        console.log(url)
        this.setState({
            url: url
        })
    }
    render() {
  
      return (
        <View>
            <View style={{borderWidth: 1,borderRadius:5, flex: 1, height: 300, marginTop:20, marginHorizontal: 20, padding:20, marginTop: 10}}>
                <WebView source={{uri: this.state.url }}/>
            </View>
            <View style={{alignItems: "center", marginHorizontal: 20 }}>
                <NavBar current={this.state.url} onChange={(i) => this.changeUrl(i)}/>
            </View>
        </View>
      )
    }
}

const NavBar = (props) => {
    return(
        <View style={{flex: 1}}>
            <View>
                <TextInput style={styles.textInput} defaultValue={props.current} autoCorrect={false} autoCapitalize={false} onSubmitEditing={(e) => {props.onChange(e.nativeEvent.text)}}/>
            </View>
            <ScrollView horizontal = {true} style={{flex: 1}} >
                <NavButton onChange={(i) => props.onChange(i)} title="Facebook" url="http://facebook.com"/>
                <NavButton onChange={(i) => props.onChange(i)} title="Google" url="http://google.com"/>
                <NavButton onChange={(i) => props.onChange(i)} title="Twitter" url="http://twitter.com"/>
                <NavButton onChange={(i) => props.onChange(i)} title="YouTube" url="http://youtube.com"/>
                <NavButton onChange={(i) => props.onChange(i)} title="Instagram" url="http://instagram.com"/>
            </ScrollView>
        </View>
    )
}

const NavButton = (props) => {
    return (
        <View style= {{ borderWidth: 1, height: 50, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <Button onPress={() => {props.onChange(props.url)}} title={props.title}/>
        </View>
    )
}


export default Web;
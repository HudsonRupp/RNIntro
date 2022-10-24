
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
            url: "http://google.com",
            html: false
        }
    }
    injectHtml() {
        this.setState({
            html: true,
            url: `
            <h1>FORM</h1>
            <br>
            <form id="form" onsubmit="send()">
                <p>username</p>
                <input type="text" id="username"> <br>
                <p>password</p>
                <input type="text" id="password"> <br>
                <input type="submit" value="submit">
            </form>
            <script>
                function send(){
                    window.ReactNativeWebView.postMessage(document.getElementById("username").value + " " + document.getElementById("password").value)
                }
            </script>
            `
            
            
        })
    }
    changeUrl(url) {
        if (url == "HTML") {
            this.injectHtml()
            return
        }
        this.setState({
            url: url,
            html: false
        })
    }
    render() {
  
      return (
        <View>
            <View style={{borderWidth: 1,borderRadius:5, flex: 1, height: 300, marginTop:20, marginHorizontal: 20, padding:20, marginTop: 10}}>
                <WebView onMessage={(event) => {alert(event.nativeEvent.data);}} source={this.state.html ? {html: this.state.url} : {uri: this.state.url }}/>
            </View>
            <View style={{alignItems: "center", marginHorizontal: 20 }}>
                <NavBar current={this.state.html ? "Custom HTML" : this.state.url} onChange={(i) => this.changeUrl(i)}/>
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
                <NavButton onChange={(i) => props.onChange(i)} title="CustomHTML" url="HTML"/>
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
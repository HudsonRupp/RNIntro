
import React, {Component, useState} from 'react';
import { Alert, Image, FlatList, StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
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
            html: false,
            imgUri: "https://upload.wikimedia.org/wikipedia/commons/a/a2/1GB_a_tope_266.jpg",
        }
    }
    webview = null;
    injectJS() {
        if (this.webview) {
            console.log(this.webview)
            this.webview.injectJavaScript("document.body.style.background = '#" + (Math.floor(Math.random()*1000000)) + "'");
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
                <input type="file" id="file"> <br>
                <input type="submit" value="submit">
            </form>
            <script>
                function send(){
                    window.ReactNativeWebView.postMessage(document.getElementById("file").value + "|" + document.getElementById("username").value + " " + document.getElementById("password").value)
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
    handleMessage(event) {
        data = event.nativeEvent.data
        fileUri = data.split('|')[0]
        //this.state.imgUri = fileUri
        console.log(this.state.imgUri)
        alert("Form Data: " + data.split("|")[1] + "\nImg: " + fileUri);
    }
    render() {
      return (
    
        <View>
            <View style={{borderWidth: 1,borderRadius:5, flex: 1, height: 300, marginTop:20, marginHorizontal: 20, padding:20, marginTop: 10}}>
                <WebView  ref={(c) => (this.webview = c)} onMessage={(event) => {this.handleMessage(event)}} source={this.state.html ? {html: this.state.url} : {uri: this.state.url }}/>
            </View>
            <View style={{alignItems: "center", marginHorizontal: 20 }}>
                <NavBar current={this.state.html ? "Custom HTML" : this.state.url} 
                injectJS={() => this.injectJS()} 
                onChange={(i) => this.changeUrl(i)}/>
            </View>
            <View style={{alignItems: 'center' }}>
                {/*<Image style={{borderWidth: 1, height: 100, width: 100}} source={{uri: this.state.imgUri}}/>/*/}
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
            <Button onPress={() => props.injectJS()} title="change color"/>
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
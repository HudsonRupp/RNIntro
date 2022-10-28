import React, {Component, useState} from 'react';
import {StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';

//group buttons under buttons
const GroupedNavigation = (props) => {
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
        <View style= {styles.navButton}>
            <Button onPress={() => {props.onChange(props.url)}} title={props.title}/>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, borderRadius: 10, padding: 5
    },
    navButton: {
        borderWidth: 1, 
        height: 50, 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row"
    }
})


export default GroupedNavigation;
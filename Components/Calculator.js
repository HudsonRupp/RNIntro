import React, {Component, useState} from 'react';
import {Slider, Alert, FlatList, StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    square: {
        borderWidth: 1, width: 50, height: 50, justifyContent: "center", alignItems: "center"
    }
});


class Calculator extends Component {

    render() {
        return(
            <View style={{alignItems: "center"}}>
                <Text>ASDF</Text>
                
                <View style={{flexDirection: "row"}}>
                    <Tile value="7" onClick={() => handleClick(0)}/>
                    <Tile value="8" onClick={() => handleClick(1)}/>
                    <Tile value="9" onClick={() => handleClick(2)}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Tile value="4" onClick={() => handleClick(3)}/>
                    <Tile value="5" onClick={() => handleClick(4)}/>
                    <Tile value="6" onClick={() => handleClick(5)}/>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Tile value="1" onClick={() => handleClick(6)}/>
                    <Tile value="2" onClick={() => handleClick(7)}/>
                    <Tile value="3" onClick={() => handleClick(8)}/>
                </View>
                <Text>ASDF</Text>
            </View>
        )
    }
}
const Display = (props) => {

}
const Tile = (props) => {
    return(
        <View style={styles.square}>
            <Button onPress={() => {props.onClick(props.value)}} title={props.value}/>
        </View>
    );
}



export default Calculator;
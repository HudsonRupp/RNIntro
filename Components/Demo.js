import React, { useState} from 'react';
 import { FlatList, StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1, borderRadius: 10, padding: 5
  },
  container: {
    margin:50, flex: 1, justifyContent: "center", alignItems: "center"
  }
})


 const Demo = () => {
  const[text, setText] = useState('default value');
  
   return (
     <View /*style={styles.container}*/>
      <View>
       <Text style={{justifyContent: "center"}}>
         {text}
       </Text>
       <TextInput style={styles.textInput} placeholder="Type to change text" defaultValue={text} onChangeText={(newText) => setText(newText)}/>
       <SubComponent name="one"/>
       <SubComponent name="two"/>
      </View>
      {/*
      <FlatList scrollEnabled={false} data={[{key: 'One'}, {key: 'Two'}, {key: 'Three'}, {key: 'Four'}]} 
   renderItem={({item}) => <Text>-- {item.key}</Text>}/> */}
     </View>
   );

  
 }
 const SubComponent = (props) => {
  const [isOn, setIsOn] = useState(true);
  return(
    <View>
      <Text> SubComponent {props.name}</Text>
      <Text > This component is {isOn ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => {isOn ? setIsOn(false) : setIsOn(true);}}/>

    </View>
  );
 }


 export default Demo;
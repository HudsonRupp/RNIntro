import React, {useState} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

const Demo = () => {
  const [text, setText] = useState('default value');

  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type to change text"
        defaultValue={text}
        onChangeText={newText => setText(newText)}
      />
      <SubComponent name="one" />
      <SubComponent name="two" />
    </View>
  );
};
const SubComponent = props => {
  const [isOn, setIsOn] = useState(true);
  return (
    <View>
      <Text> SubComponent {props.name}</Text>
      <Text> This component is {isOn ? 'On' : 'Off'}</Text>
      <Button
        title="Toggle"
        onPress={() => {
          isOn ? setIsOn(false) : setIsOn(true);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
  },
});

export default Demo;

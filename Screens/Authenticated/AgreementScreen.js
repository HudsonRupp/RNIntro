import React, {Component, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {storeValue, readValue} from '../../Helpers';


function AgreementScreen ({navigation}) {

  async function submit() {
    var currentUser = await readValue('@user');
    currentUser.agreementCompleted = true;
    storeValue('@user', currentUser);
    navigation.navigate('HomeScreen')
  }

  useEffect(() => {
    async function checkData() {
      user = await readValue("@user");
      if (user.agreementCompleted) {
        navigation.navigate("HomeScreen")
      }
    }

    checkData();
  })

  return(
    <View style={styles.main}>
        <Text style={styles.header}>Agreement:</Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          velit at eros vestibulum suscipit. Praesent vehicula fermentum
          efficitur. Morbi in est accumsan, vestibulum felis quis, viverra
          justo. Duis mi orci, lobortis at ullamcorper in, finibus eu purus.
          Nullam id lobortis tortor, maximus aliquet velit. Praesent congue diam
          cursus ex efficitur malesuada. Morbi sit amet mattis metus. Cras
          tristique risus ac lectus vestibulum suscipit. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
          <Text>AGREE</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 50,
  },
  header: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 10,
  },
  button: {
    height: 30,
    width: 100,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default AgreementScreen;

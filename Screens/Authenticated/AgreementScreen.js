import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {storeValue, readValue} from '../../Helpers';
import NavButton from '../../Components/NavButton';
import HomeScreen from './HomeScreen';
import themes from '../../Constants';
class AgreementScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }
  async submit() {
    var currentUser = await readValue('@user');
    currentUser.agreementCompleted = true;
    storeValue('@user', currentUser);
    this.props.changeScreen(
      <HomeScreen
        user={currentUser}
        changeScreen={screen => this.props.changeScreen(screen)}
      />,
    );
  }

  render() {
    return (
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
        <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
          <Text>AGREE</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
    backgroundColor: themes.light.backgroundAccent,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default AgreementScreen;

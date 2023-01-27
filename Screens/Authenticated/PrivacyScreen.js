import React, {Component} from 'react';
import {StyleSheet, AppState} from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';

class PrivacyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appstate: AppState.currentState,
    };
  }

  componentDidMount() {
    this.appStateSubscription = AppState.addEventListener(
      'change',
      this.handleStateChange,
    );
  }
  componentWillUnmount() {
    this.appStateSubscription.remove();
  }
  handleStateChange = nextState => {
    this.setState({appstate: nextState});
  };
  render() {
    return this.state.appstate.match(/inactive|background/) ? (
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
    ) : null;
  }
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default PrivacyScreen;

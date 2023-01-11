import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import themes from '../Constants';
class Web extends Component {
  constructor(props) {
    super(props);
  }
  handleMessage(event) {
    data = event.nativeEvent.data;
    fileUri = data.split('|')[0];
    alert('Form Data: ' + data.split('|')[1] + '\nImg: ' + fileUri);
  }
  render() {
    return (
      <View>
        <View
          style={
            this.props.darkMode
              ? styles.webviewContainerDark
              : styles.webviewContainer
          }>
          <WebView
            onMessage={event => {
              this.handleMessage(event);
            }}
            source={
              this.props.html
                ? {html: this.props.source}
                : {uri: this.props.source}
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  webviewContainer: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    height: 550,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    marginTop: 10,
    borderColor: themes.light.text,
  },
  webviewContainerDark: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    height: 550,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    marginTop: 10,
    borderColor: themes.dark.text,
  },
  groupedNavContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default Web;

import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Board from './Components/Board';
import Demo from './Components/Demo';
import Web from './Components/Web';
import GroupedNavigation from './Components/GroupedNavigation';
import GroupedNavigationSub from './Components/GroupedNavigationSub';

class mainApp extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://google.com',
      html: false,
      imgUri:
        'https://upload.wikimedia.org/wikipedia/commons/a/a2/1GB_a_tope_266.jpg',
      data: {},
      sgVisible: false,
    };
  }
  //to hold webview reference
  webview = null;
  switchGroup(group) {
    const links = {
      misc: {
        CustomHTML: 'HTML',
        Youtube: 'http://youtube.com',
      },
      socialMedia: {
        Facebook: 'http://facebook.com',
        Twitter: 'http://twitter.com',
        Instagram: 'http://instagram.com',
      },
      search: {
        Google: 'http://google.com',
        Bing: 'http://bing.com',
        Yahoo: 'http://yahoo.com',
        DuckDuckGo: 'http://duckduckgo.com',
      },
    };
    //check if group is same as last
    if (
      JSON.stringify(Object.keys(links[group])) ==
      JSON.stringify(Object.keys(this.state.data))
    ) {
      this.setState({
        sgVisible: !this.state.sgVisible,
      });
    } else {
      this.setState({
        data: links[group],
        sgVisible: true,
      });
    }
  }
  injectJS() {
    if (this.webview) {
      this.webview.injectJavaScript(
        "document.body.style.background = '#" +
          Math.floor(Math.random() * 1000000) +
          "'",
      );
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
            `,
    });
  }
  changeUrl(url) {
    console.log(url);
    if (url == 'HTML') {
      this.injectHtml();
      return;
    }
    this.setState({
      url: url,
      html: false,
    });
  }
  handleMessage(event) {
    data = event.nativeEvent.data;
    fileUri = data.split('|')[0];
    console.log(this.state.imgUri);
    alert('Form Data: ' + data.split('|')[1] + '\nImg: ' + fileUri);
  }

  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flex: 5}}>
          <ScrollView>
            <Wrapper header="Tic-Tac-Toe">
              <Board />
            </Wrapper>
            <Wrapper header="Demo">
              <Demo />
            </Wrapper>
            <Wrapper childStyle={styles.web} header="WebView">
              <Web source={this.state.url} />
            </Wrapper>
          </ScrollView>
          <GroupedNavigationSub
            data={this.state.data}
            visibility={this.state.sgVisible}
            changeBrowser={url => this.changeUrl(url)}
          />
        </View>
        <GroupedNavigation
          source={this.state.html ? 'Custom HTML' : this.state.url}
          injectJS={() => this.injectJS()}
          onChange={i => this.changeUrl(i)}
          current={this.state.url}
          switchGroup={group => this.switchGroup(group)}
        />
      </View>
    );
  }
}

const Wrapper = props => {
  return (
    <View>
      <View style={{borderBottomWidth: 1, marginHorizontal: 70}}>
        <Text style={styles.header}>{props.header}</Text>
      </View>
      {/* if child style prop is set, use that, */}
      <View
        style={
          props.childStyle === undefined ? styles.container : props.childStyle
        }>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
  },
  header: {
    fontSize: 40,
    marginTop: 30,
    textAlign: 'center',
    padding: 0,
  },
  web: {
    marginBottom: 50,
  },
});

export default mainApp;

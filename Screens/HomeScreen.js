import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Board from '../Components/Board';
import Web from '../Components/Web';
import GroupedNavigation from '../Components/GroupedNavigation';
import GroupedNavigationSub from '../Components/GroupedNavigationSub';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://google.com',
      html: false,
      data: {},
      sgVisible: false,
    };
  }
  signOut() {
    console.log('Signing out');
    //this.props.changeScreen(<LoginScreen changeScreen={screen => this.changeScreen(screen)}/>)
  }
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
    if (url == 'HTML') {
      this.injectHtml();
      return;
    }
    this.setState({
      url: url,
      html: false,
    });
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.scrollview}>
          <ScrollView>
            <Wrapper childStyle={styles.web} header="WebView">
              <Web html={this.state.html} source={this.state.url} />
            </Wrapper>
            <Wrapper header="Tic-Tac-Toe">
              <Board />
            </Wrapper>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signOut()}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </ScrollView>
          {/* Overlap submenu over scrollview */}
          <GroupedNavigationSub
            data={this.state.data}
            visibility={this.state.sgVisible}
            changeBrowser={url => this.changeUrl(url)}
          />
        </View>
        <GroupedNavigation
          source={this.state.url}
          injectJS={() => this.injectJS()}
          onChange={i => this.changeUrl(i)}
          current={this.state.url}
          switchGroup={group => this.switchGroup(group)}
          htmlActive={this.state.html}
          sgActive={this.state.sgVisible}
        />
      </View>
    );
  }
}

const Wrapper = props => {
  return (
    <View>
      <View style={styles.headerUnderline}>
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
  main: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 30,
    width: 100,
    marginTop: 20,
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  scrollview: {
    flex: 5,
  },
  headerUnderline: {
    borderBottomWidth: 1,
    marginHorizontal: 70,
  },
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
    color: '#000000',
  },
  web: {
    marginBottom: 50,
  },
});

export default HomeScreen;

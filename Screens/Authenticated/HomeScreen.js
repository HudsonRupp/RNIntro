import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Board from '../../Components/Board';
import Web from '../../Components/Web';
import GroupedNavigation from '../../Components/GroupedNavigation';
import GroupedNavigationSub from '../../Components/GroupedNavigationSub';
import LoginScreen from '../Unauthenticated/LoginScreen';
import themes from '../../Constants';
import {storeValue, readValue} from '../../Helpers';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://google.com',
      html: false,
      data: {},
      sgVisible: false,
      darkMode: false,
    };
    this.initDarkMode();
  }
  switchGroup(group) {
    const links = {
      settings: {
        DarkMode: 'DarkMode',
        SignOut: 'SignOut',
      },
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
    if (url == 'DarkMode') {
      this.darkMode();
      return;
    }
    if (url == 'SignOut') {
      this.signOut();
      return;
    }
    this.setState({
      url: url,
      html: false,
    });
  }
  signOut = async () => {
    await storeValue('@user', null);
    this.props.changeScreen(
      <LoginScreen changeScreen={screen => this.props.changeScreen(screen)} />,
    );
  };
  initDarkMode = async () => {
    val = await readValue('@darkMode');
    this.setState({
      darkMode: val,
    });
  };
  darkMode = async () => {
    val = await readValue('@darkMode');
    if (val == null) {
      await storeValue('@darkMode', false);
      this.setState({
        darkMode: false,
      });
    } else {
      storeValue('@darkMode', !this.state.darkMode);
      this.setState({
        darkMode: !this.state.darkMode,
      });
    }
  };
  render() {
    return (
      <View style={this.state.darkMode ? styles.mainDark : styles.main}>
        <View style={styles.scrollview}>
          <ScrollView>
            <Wrapper
              darkMode={this.state.darkMode}
              header={'Hello: ' + this.props.user.username}
            />
            <Wrapper
              darkMode={this.state.darkMode}
              childStyle={styles.web}
              header="WebView">
              <Web
                html={this.state.html}
                darkMode={this.state.darkMode}
                source={this.state.url}
              />
            </Wrapper>
            <Wrapper darkMode={this.state.darkMode} header="Tic-Tac-Toe">
              <Board darkMode={this.state.darkMode} />
            </Wrapper>
          </ScrollView>
          <GroupedNavigationSub
            data={this.state.data}
            visibility={this.state.sgVisible}
            changeBrowser={url => this.changeUrl(url)}
            darkMode={this.state.darkMode}
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
          darkMode={this.state.darkMode}
        />
      </View>
    );
  }
}

const Wrapper = props => {
  return (
    <View>
      <View
        style={
          props.darkMode ? styles.headerUnderlineDark : styles.headerUnderline
        }>
        <Text style={props.darkMode ? styles.headerDark : styles.header}>
          {props.header}
        </Text>
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
    backgroundColor: themes.light.background,
  },
  mainDark: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: themes.dark.background,
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
  buttonDark: {
    height: 30,
    width: 100,
    marginTop: 20,
    backgroundColor: themes.dark.backgroundAccent,
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
    borderColor: themes.light.text,
  },
  headerUnderlineDark: {
    borderBottomWidth: 1,
    marginHorizontal: 70,
    borderColor: themes.dark.text,
  },
  container: {
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
  },
  containerDark: {
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    color: themes.dark.text,
  },
  header: {
    fontSize: 40,
    marginTop: 30,
    textAlign: 'center',
    padding: 0,
    color: themes.light.text,
  },
  headerDark: {
    fontSize: 40,
    marginTop: 30,
    textAlign: 'center',
    padding: 0,
    color: themes.dark.text,
  },
  web: {
    marginBottom: 50,
  },
});
export default HomeScreen;

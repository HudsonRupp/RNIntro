import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const GroupedNavigation = props => {
  const [data, setData] = useState({test: 'val'});
  const [sgVisible, setsgVisible] = useState(false);
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
  function switchGroup(group) {
    //check if group is same as last
    if (
      JSON.stringify(Object.keys(links[group])) ==
      JSON.stringify(Object.keys(data))
    ) {
      setsgVisible(!sgVisible);
    } else {
      setData(links[group]);
      setsgVisible(true);
    }
  }
  return (
    <View style={{flex: 1}}>
      <View>
        <TextInput
          style={styles.textInput}
          defaultValue={props.current}
          autoCorrect={false}
          autoCapitalize={false}
          onSubmitEditing={e => {
            props.onChange(e.nativeEvent.text);
          }}
        />
      </View>
      <ScrollView horizontal={true} style={{flex: 1}}>
        <NavButton
          onChange={i => switchGroup(i)}
          title="Social Media"
          url="socialMedia"
        />
        <NavButton onChange={i => switchGroup(i)} title="MISC" url="misc" />
        <NavButton
          onChange={i => switchGroup(i)}
          title="Search Engines"
          url="search"
        />
      </ScrollView>
      <SubGroup
        data={data}
        visibility={sgVisible}
        changeBrowser={url => props.onChange(url)}
      />
      <Button onPress={() => props.injectJS()} title="change color" />
    </View>
  );
};
const NavButton = props => {
  return (
    <View style={styles.navButton}>
      <Button
        onPress={() => {
          props.onChange(props.url);
        }}
        title={props.title}
      />
    </View>
  );
};
class SubGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      current: '',
    };
  }
  render() {
    datalist = [];
    for (const [title, url] of Object.entries(this.props.data)) {
      datalist.push(
        <NavButton
          title={title}
          url={url}
          onChange={url => this.props.changeBrowser(url)}
        />,
      );
    }
    console.log(this.props.visibility);
    return (
      <View>
        {this.props.visibility && (
          <View style={{borderWidth: 1}}>{datalist}</View>
        )}
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
  navButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default GroupedNavigation;

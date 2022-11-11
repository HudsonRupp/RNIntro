import React, {Component, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import NavButton from './NavButton';
class GroupedNavigationSub extends Component {
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
    return (
      <View style={styles.subGroup}>
        {this.props.visibility && <View>{datalist}</View>}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subGroup: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    borderTopWidth: 1,
    width: Dimensions.get('window').width,
  },
});
export default GroupedNavigationSub;

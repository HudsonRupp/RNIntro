
import React from "react";
import { Alert } from "react-native";
import WebView from "react-native-webview";

function WebScreen({route, navigation}) {

    const {source, isHtml} = route.params

    function handleMessage(m) {
      Alert.alert(m.nativeEvent.data)
    }

    return(
        <>
        <WebView
            soriginWhitelist={['*']}
            onMessage={event => {
              handleMessage(event);
            }}
            source={
              isHtml
                ? {html: source}
                : {uri: source}
            }
            style={{marginTop: 0}}
          />
        </>
    )
}

export default WebScreen;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebScreen from './WebScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

function HomeScreen(props) {
    const theme = useSelector(state => state.theme.theme);

    const htmlSrc = `
        <div style=" margin: 45%; width: 200px; scale: 200% 200% 200%">
            <h1>FORM</h1>
            <br>
            <form id="form" onsubmit="send()">
                <p>Input 1</p>
                <input type="text" id="username"> <br>
                <p>Input 2</p>
                <input type="text" id="password"> <br>
                <input type="file" id="file"> <br>
                <input type="submit" value="submit">
            </form>
            <script>
                function send(){
                    window.ReactNativeWebView.postMessage(document.getElementById("file").value + "|" + document.getElementById("username").value + " " + document.getElementById("password").value)
                }
            </script>
        </div>
            `

    return(
        
        <>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  switch (route.name) {
                    case 'Search':
                        iconName = 'search';
                        break;
                    case 'HTML':
                        iconName = 'code';
                        break;
                    case 'Settings':
                        iconName = 'ellipsis-h';
                        break;
                  }
      
                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: theme.text,
                headerStyle: {
                    backgroundColor: theme.backgroundAccent
                },
                headerTitleStyle: {color: theme.text},
                tabBarStyle: {backgroundColor: theme.backgroundAccent}
              })}>
                <Tab.Screen name="Search" component = {WebScreen} initialParams={{source: "https://google.com"}}/>
                <Tab.Screen name="HTML" component = {WebScreen} initialParams={{isHtml: true, source: htmlSrc}} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </>
        
    )


}


export default HomeScreen
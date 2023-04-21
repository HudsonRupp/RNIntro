import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import store from '../../store/store.js';
import {toggle} from '../../store/slices/ThemeSlice/index';
import { storeValue } from '../../Helpers.js';

function SettingsScreen(props) {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);

    async function signOut() {
        await storeValue("@user", {})
        dispatch({ type: 'userLogOut' })
    }
    async function toggleTheme() {
        await storeValue("@theme", theme.name == "light" ? "dark": "light");
        store.dispatch(toggle());

    }

    function button(display, fn) {
        return(
            <TouchableOpacity style={[styles.button, {backgroundColor: theme.accent}]} onPress={fn} >
                <Text style={{color: theme.text}}>{display}</Text>
            </TouchableOpacity>
        )
    }
    return (
      <ScrollView style={[styles.main, {backgroundColor: theme.background}]} >
        {button("Dark Mode", toggleTheme)}
        {button("Sign out", signOut)}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 0,
        marginHorizontal: 0,
        paddingHorizontal: 0
    },
    button: {
        margin: 2,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        padding: 20,
        borderColor: '#A1A1A1',
        backgroundColor: '#E1E1E1'
    }
})

export default SettingsScreen;
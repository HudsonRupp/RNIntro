import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeValue =  async (key, value) => {
    try{
        AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}


export const readValue = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value != null ? JSON.parse(value) : null;
    } catch(e) {
        console.log(e)
    }
}
import AsyncStorage from '@react-native-community/async-storage';

export async function validate(key) {
    const value = await AsyncStorage.getItem(key)
        .then(() => alert(`Token válido !`))
        .catch(e => alert(e))
    if (value !== null) {
        // value previously stored
    } // error reading value
}

export async function save(key, value) {
    await AsyncStorage.setItem(key, value)
        .then(() => alert(`Token salvo localmente !`))
        .catch(e => alert(e))
}

export async function clear() {
    await AsyncStorage.clear()
        .then(res => alert(`Dados limpo com sucesso.`))
        .catch(e => alert(e))
}
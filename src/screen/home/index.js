import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import logo from '../../assets/logo.png';
import styles from './styles';
import { validate } from '../../helper/storage';

export default function Home() {
    const navigation = useNavigation();

    async function validateUser() {
        let user = `user`;
        await validate(user)
    }

    async function createAccount() {
        navigation.navigate('CreateCompany');
    }

    async function login() {
        navigation.navigate('Login');
    }

    useEffect(() => {
        validateUser();
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerTxt}>
                    <Text style={styles.headerTxtBold}>Olá, seja bem-vindo !</Text>
                </Text>
                <TouchableOpacity
                    style={styles.btnAcessar}
                    onPress={() => createAccount()}>
                    <Text style={styles.txtAcessar}>Criar Conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnAcessar}
                    onPress={() => login()}>
                    <Text style={styles.txtAcessar}>Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
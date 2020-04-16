import React, { useEffect, useState } from 'react';
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
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

export default function Login() {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState();


    async function checkUser() {
        if (!cpf) {
            alert('entrou')
            return true;
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />

                <Text style={styles.headerTxtBold}>Digite seu CPF</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu CPF' onChangeText={text => setCpf(text)}></TextInput>

                <TouchableOpacity
                    style={styles.btnAcessar}
                    onPress={() => checkUser()}>
                    <Text style={styles.txtAcessar}>Acessar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
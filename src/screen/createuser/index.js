import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';
import styles from './styles';
import ModalMessage from '../../component/modal';

export default function CreateUser() {

    const navigation = useNavigation();
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [endereco, setEndereco] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUf] = useState();
    const [grupo] = useState('1');
    const [status] = useState('ativo');

    const [isVisible, setVisibilidade] = useState(false);
    const [isMessage, setMensagem] = useState()

    async function handleGoBack() {
        navigation.goBack()
    }

    function handleSaveUser() {

        let data = { nome, sobrenome, endereco, cpf, email, cidade, uf, grupo, status }
        api.post('funcionario', data)
            .then(res => {
                toggleModal(true, JSON.stringify(res.data.message))
            })
            .catch(err => {
                console.log(err)
                toggleModal(true, JSON.stringify(err.message))
            })
    }

    async function toggleModal(visible, message) {
        setVisibilidade(visible);
        setMensagem(JSON.stringify(message))
    }

    return (
        <View style={styles.user}>
            {
                isVisible === true ?
                    <ModalMessage isVisible={isVisible} isMessage={isMessage} />
                    : null
            }
            <ScrollView>
                <Text style={styles.userProperty}>NOME:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu Nome' onChangeText={text => setNome(text)}></TextInput>

                <Text style={styles.userProperty}>SOBRENOME:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu Sobrenome' onChangeText={text => setSobrenome(text)}></TextInput>

                <Text style={styles.userProperty}>ENDERECO:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu Endereco' onChangeText={text => setEndereco(text)}></TextInput>

                <Text style={styles.userProperty}>CPF:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu CPF' onChangeText={text => setCpf(text)}></TextInput>

                <Text style={styles.userProperty}>EMAIl:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu email' onChangeText={text => setEmail(text)}></TextInput>

                <Text style={styles.userProperty}>CIDADE:</Text>
                <TextInput style={styles.userValue} placeholder='Digite sua Cidade' onChangeText={text => setCidade(text)}></TextInput>

                <Text style={styles.userProperty}>UF:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu Estado' onChangeText={text => setUf(text)}></TextInput>

            </ScrollView>
            <View style={styles.btnAction}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => handleGoBack()}>
                    <Text style={styles.btnBackTxt}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCreate}
                    onPress={() => handleSaveUser()}>
                    <Text style={styles.btnCreateTxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
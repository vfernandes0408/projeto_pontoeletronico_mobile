import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';
import styles from './styles';
import MyImage from '../../component/image';

export default function CreateCompany() {

    const navigation = useNavigation();
    const [nomePropriedade, setNomePropriedade] = useState();
    const [razaoSocial, setRazaoSocial] = useState();
    const [cnpj, setCnpj] = useState();
    const [endereco, setEndereco] = useState();
    const [imagem] = useState();
    const [hectares, setHectares] = useState();
    const [tipo, setTipo] = useState();
    const [cidade, setCidade] = useState();
    const [estado] = useState();
    const [status] = useState('ativo');

    async function handleGoBack() {
        navigation.goBack()
    }

    function handleSaveUser() {

        let data = { nomePropriedade, razaoSocial, cnpj, endereco, imagem, hectares, tipo, cidade, estado }
        api.post('funcionario', data)
            .then(res => {
                toggleModal(true, JSON.stringify(res.data.message))
            })
            .catch(err => {
                console.log(err)
                toggleModal(true, JSON.stringify(err.message))
            })
    }

    return (
        <View style={styles.user}>
            <ScrollView>
                <Text style={styles.userProperty}>Nome da Propriedade:</Text>
                <TextInput style={styles.userValue} placeholder='Digite o nome da propriedade' onChangeText={text => setNomePropriedade(text)}></TextInput>

                <Text style={styles.userProperty}>Razão Social:</Text>
                <TextInput style={styles.userValue} placeholder='Digite a Razão Social' onChangeText={text => setRazaoSocial(text)}></TextInput>

                <Text style={styles.userProperty}>Cnpj:</Text>
                <TextInput style={styles.userValue} placeholder='Digite o Cnpj' onChangeText={text => setCnpj(text)}></TextInput>

                <Text style={styles.userProperty}>Endereço:</Text>
                <TextInput style={styles.userValue} placeholder='Digite seu Endereço' onChangeText={text => setEndereco(text)}></TextInput>

                <MyImage />

                <Text style={styles.userProperty}>Hectares:</Text>
                <TextInput style={styles.userValue} placeholder='Digite o tamanho em hectares' onChangeText={text => setHectares(text)}></TextInput>

                <Text style={styles.userProperty}>Tipo de Produção:</Text>
                <TextInput style={styles.userValue} placeholder='Digite o Tipo' onChangeText={text => setTipo(text)}></TextInput>


                <Text style={styles.userProperty}>Estado:</Text>
                <TextInput style={styles.userValue} placeholder='Digite o seu Estado' onChangeText={text => setCidade(text)}></TextInput>


                <Text style={styles.userProperty}>Cidade:</Text>
                <TextInput style={styles.userValue} placeholder='Digite a sua Cidade' onChangeText={text => setCidade(text)}></TextInput>



            
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
            </ScrollView>
        </View>
    );
}
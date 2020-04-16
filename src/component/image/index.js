import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

export default class MyImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photo: ''
        }
    }

    getImage() {
        const options = {
            title: 'Selecione:',
            takePhotoButtonTitle: 'Tirar Foto',
            chooseFromLibraryButtonTitle: 'Escolher da Galeria',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            const source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
                photo: source,
            });
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.btnCameraTxt}>Imagem:</Text>
                {!this.state.photo ?
                    <TouchableOpacity style={styles.btnCamera}
                        onPress={() => this.getImage()}>
                        <Text style={styles.btnCameraTxt}>Escolher Foto</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity
                        onPress={() => this.getImage()}>
                        <View style={styles.imageContainer}>
                            <Image source={this.state.photo} style={styles.photo} />
                        </View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

export default class ModalMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMessage: this.props.isMessage,
            isVisible: this.props.isVisible,
        }
    }

    toggleModal = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };

    render() {
        return (

            <Modal isVisible={this.state.isVisible} backdropColor={'black'} style={styles.container}>
                <View >
                    <Text>{this.state.isMessage}</Text>
                    <Button title="X" onPress={this.toggleModal} />
                </View>
            </Modal>
        );
    }
}
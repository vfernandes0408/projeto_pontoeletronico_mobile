import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from './styles';


const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Image source={} /> */}
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>casos</Text>.
                </Text>
            </View>
        </View>
    );
};

export default Home;

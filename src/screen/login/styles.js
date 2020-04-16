import {
    StyleSheet
} from 'react-native';
import {
    TouchableWithoutFeedback
} from 'react-native-gesture-handler';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#ffff'
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTxt: {
        fontSize: 15,
        color: '#737380',
    },

    headerTxtBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    txtAcessar: {
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingVertical: 75,
        textTransform: 'uppercase'
    },

    btnAcessar: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        color: 'white',
        fontSize: 18
    }
});
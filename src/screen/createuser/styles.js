import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    user: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 15,
    },

    userProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    userValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    btnAction: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btnBack: {
        alignItems: 'center',
        backgroundColor: '#e02041',
        borderRadius: 8,
        justifyContent: 'center',
        height: 50,
        width: '48%',
    },

    btnCreate: {
        alignItems: 'center',
        backgroundColor: '#e02041',
        borderRadius: 8,
        justifyContent: 'center',
        height: 50,
        width: '48%',
    },

    btnBackTxt: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

    btnCreateTxt: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

});
import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#ffff',
        flex: 1,
    },

    imageContainer: {
        flex: 1,
        height: 240,
        marginBottom: 40
    },

    btnCamera: {
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'black',
        borderStyle: 'dotted',
        borderWidth: 2,
        color: 'white',
        justifyContent: 'center',
        height: 240,
        marginBottom: 40
    },

    btnCameraTxt: {
        color: 'black',
        opacity: 1
    },

    imageTxt: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    photo: {
        borderRadius: 8,
        height: 240,
        marginBottom: 40
    },
});
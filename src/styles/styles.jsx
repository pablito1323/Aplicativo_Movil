import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
      
    },
    button:{
        backgroundColor: '#0f6189',
        marginTop: 10,
        color: '#fff',
    },
    logoutContainercs: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
    headerMH: {
    padding: 20,
    backgroundColor: '#0f6189',
    },
    titleMH: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    logo: {
        width: '100%', // Ancho del logo
        height: '50%', // Alto del logo
        alignSelf: 'center',
         // Espacio entre el logo y los inputs
    }

  });
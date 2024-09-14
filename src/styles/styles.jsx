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
    },containercard: {
      paddingVertical: 0,
      backgroundColor: '#e0f7fa',
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#0f6189',
      borderRadius: 10,
      margin: 5,
      padding: 5,
      width: '40%',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      marginBottom: '10%',
      fontWeight: 'bold',
    },
    cardImage: {
      width: '100%',
      height: 100,
      borderRadius: 10,
    },
    containerStaff: {
      flex: 1,
      backgroundColor: '#e0f7fa',
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    toggleText: {
      fontSize: 16,
      marginHorizontal: 10,
    },
    scrollContainer: {
      paddingHorizontal: 10,
    },
    cardStaff: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 20,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    imageStaff: {
      width: '100%',
      height: 200,
    },
    textContainer: {
      backgroundColor: '#0f6189',
      padding: 10,
    },
    nameStaff: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    descriptionStaff: {
      fontSize: 14,
      color: '#fff',
      marginTop: 5,
    },
    readMoreStaff: {
      color: '#00bfff',
      fontWeight: 'bold',
    },
  });
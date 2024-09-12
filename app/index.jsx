import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const index = ({ navigation }) => {
  const handleNext = () => {
    // Redirigir al próximo formulario (SecondForm)
    navigation.navigate('profile');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Primer Formulario</Title>

      <TextInput
        label="Nombre"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Correo Electrónico"
        mode="outlined"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleNext} style={styles.button}>
        Siguiente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00796b',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default index;
// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image  } from 'react-native';
import { TextInput, Button, Text, Title } from 'react-native-paper';
import { styles } from '../../src/styles/styles';

export default function LoginScreen({ setIsLoggedIn, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Puedes cambiar las credenciales según tu caso
    if (email === 'test@test.com' && password === '123456') {
      Alert.alert('Login exitoso');
      setIsLoggedIn(true); // Cambia el estado de isLoggedIn a true en App.js
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}  title="Inicio">

        <Image
        source={require('../../src/images/NOVAMENTE.png')} // Ruta hacia el logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />

      <Button mode="contained" style={styles.button} onPress={handleLogin} >
      Ingresar
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Register')}>
      ¿No tienes una cuenta? Regístrate
      </Button>
    </View>
  );
}



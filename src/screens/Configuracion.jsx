import React, { useState } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Configuracion = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [fontSize, setFontSize] = useState('16');

  // Convert fontSize to a number for styling
  const dynamicFontSize = parseInt(fontSize, 10) || 16;

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Cambiar idioma
        </Text>
        <Ionicons name="chevron-down" size={24} color={darkMode ? "white" : "black"} />
      </View>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Modo oscuro
        </Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Tamaño de letra
        </Text>
        <TextInput
          style={styles.input}
          value={fontSize}
          onChangeText={setFontSize}
          keyboardType="numeric"
        />
      </View>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Notificaciones
        </Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      
      <TouchableOpacity style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Política de privacidad
        </Text>
        <Ionicons name="chevron-forward" size={24} color={darkMode ? "white" : "black"} />
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.optionText, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          cuenta premium
        </Text>
        <Ionicons name="chevron-forward" size={24} color={darkMode ? "white" : "black"} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ACEPTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  darkOptionContainer: {
    backgroundColor: '#444',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  darkOptionText: {
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    width: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0f6189',
    padding: 15,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Configuracion;

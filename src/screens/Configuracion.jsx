import React, { useState } from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/stylespagos';

const Configuracion = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [fontSize, setFontSize] = useState('16');

  // Convert fontSize to a number for styling
  const dynamicFontSize = parseInt(fontSize, 10) || 16;

  return (
    <View style={[styles.containerC, darkMode && styles.darkContainer]}>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Cambiar idioma
        </Text>
        <Ionicons name="chevron-down" size={24} color={darkMode ? "white" : "black"} />
      </View>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
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
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Tamaño de letra
        </Text>
        <TextInput
          style={styles.inputC}
          value={fontSize}
          onChangeText={setFontSize}
          keyboardType="numeric"
        />
      </View>
      
      <View style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
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
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          Política de privacidad
        </Text>
        <Ionicons name="chevron-forward" size={24} color={darkMode ? "white" : "black"} />
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.optionContainer, darkMode && styles.darkOptionContainer]}>
        <Text style={[styles.label, { fontSize: dynamicFontSize }, darkMode && styles.darkOptionText]}>
          cuenta premium
        </Text>
        <Ionicons name="chevron-forward" size={24} color={darkMode ? "white" : "black"} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonC}>
        <Text style={styles.buttonText}>ACEPTAR</Text>
      </TouchableOpacity>
    </View>
  );
}



export default Configuracion;

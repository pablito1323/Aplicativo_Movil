import React, { useState } from "react";
import {View,Text,TouchableOpacity,TextInput,ScrollView} from "react-native";
import { styles } from '../styles/stylespagos';

export default function Suscripcion ({  }) {

  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [familia, setFamilia] = useState("");
  const [email, setEmail] = useState("");
  const [fono, setFono] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>FORMULARIO DE SUSCRIPCION</Text>
      </View>
      
      <View style={styles.field}>
      

        <Text style={styles.label}>DNI</Text>
        <TextInput
          style={styles.input}
          value={dni}
          onChangeText={setDni}
          placeholder="DNI"
          keyboardType="numeric"
          placeholderTextColor="#999"
          maxLength={8}
        />

        <Text style={styles.label}>Nombre del Usuario</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="JUAN MENDIVI LAZO"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Familia</Text>
        <TextInput
          style={styles.input}
          value={familia}
          onChangeText={setFamilia}
          placeholder="JUAN MENDIVI LAZO"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Ejemplo@gmail.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>Numero de Celular</Text>
        <TextInput
          style={styles.input}
          value={fono}
          onChangeText={setFono}
          placeholder="# De Celular"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={9}
        />

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ACEPTAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
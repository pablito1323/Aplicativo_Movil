import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";

export default function SUSCRIPCION ({  }) {
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
        <Text style={styles.label}>familia</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  field: {
    marginBottom: 5,
    width: "90%",
  },
  rectangle: {
    
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    marginBottom:10,
    marginTop:60
    
    
  },
  rectangleText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#1877f2",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

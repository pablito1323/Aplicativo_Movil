import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default function DoctorsScreen() {
  const [isTestSelected, setIsTestSelected] = useState(false);

  const toggleSwitch = () => setIsTestSelected(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Toggle Switch */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>TODOS</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isTestSelected ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isTestSelected}
        />
        <Text style={styles.toggleText}>SEGÚN TU TEST</Text>
      </View>

      {/* Scrollable List of Doctors */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image source={require('../../src/images/Staff/ciro_palacios.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>CIRO PALACIOS</Text>
            <Text style={styles.description}>
              Profesional altamente calificado con más de 10 años de experiencia en el campo de la
              salud mental. Especializado en el tratamiento de trastornos como la depresión, la ansiedad,
              y los trastornos alimenticios...{' '}
              <Text style={styles.readMore}>leer mas</Text>
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require('../../src/images/Staff/melisa_loza.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Melisa Loza</Text>
            <Text style={styles.description}>
              Profesional altamente calificado con más de 10 años de experiencia en el campo de la
              salud mental. Especializado en el tratamiento de trastornos como la depresión, la ansiedad,
              y los trastornos alimenticios...{' '}
              <Text style={styles.readMore}>leer mas</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  card: {
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
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    backgroundColor: '#007AFF',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  readMore: {
    color: '#00bfff',
    fontWeight: 'bold',
  },
});

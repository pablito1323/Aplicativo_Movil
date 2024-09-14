import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { styles } from '../../src/styles/styles';


export default function DoctorsScreen() {
  const [isTestSelected, setIsTestSelected] = useState(false);

  const toggleSwitch = () => setIsTestSelected(previousState => !previousState);

  return (
    <View style={styles.containerStaff}>
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
        <View style={styles.cardStaff}>
          <Image source={require('../../src/images/Staff/ciro_palacios.png')} style={styles.imageStaff} />
          <View style={styles.textContainer}>
            <Text style={styles.nameStaff}>CIRO PALACIOS</Text>
            <Text style={styles.descriptionStaff}>
              Profesional altamente calificado con más de 10 años de experiencia en el campo de la
              salud mental. Especializado en el tratamiento de trastornos como la depresión, la ansiedad,
              y los trastornos alimenticios...{' '}
              <Text style={styles.readMoreStaff}>leer mas</Text>
            </Text>
          </View>
        </View>

        <View style={styles.cardStaff}>
          <Image source={require('../../src/images/Staff/melisa_loza.png')} style={styles.imageStaff} />
          <View style={styles.textContainer}>
            <Text style={styles.nameStaff}>Melisa Loza</Text>
            <Text style={styles.descriptionStaff}>
              Profesional altamente calificado con más de 10 años de experiencia en el campo de la
              salud mental. Especializado en el tratamiento de trastornos como la depresión, la ansiedad,
              y los trastornos alimenticios...{' '}
              <Text style={styles.readMoreStaff}>leer mas</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

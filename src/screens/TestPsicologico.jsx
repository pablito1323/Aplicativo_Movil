import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../src/styles/styles';

export default function TestScreen() {
  return (
    <ScrollView contentContainerStyle={styles.containercard}>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Test Familiar</Text>
          <Image source={require('../../src/images/Test/test_familiar.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Depresión</Text>
          <Image source={require('../../src/images/Test/depresion.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Ansiedad</Text>
          <Image source={require('../../src/images/Test/ansiedad.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Síndrome de Defícit de Atención</Text>
          <Image source={require('../../src/images/Test/deficit_atencion.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Sociophobia</Text>
          <Image source={require('../../src/images/Test/sociophobia.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>irritabilidad</Text>
          <Image source={require('../../src/images/Test/irritabilidad.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Test Autismo</Text>
          <Image source={require('../../src/images/Test/Autismo.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Transtorno Obsesivo Compulsivo</Text>
          <Image source={require('../../src/images/Test/TransObsesivoCompulsivo.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Transtorno Alimentario</Text>
          <Image source={require('../../src/images/Test/TranstornoAlimentario.png')} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Transtorno Bipolar</Text>
          <Image source={require('../../src/images/Test/TranstornoBipolar.png')} style={styles.cardImage} />
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};



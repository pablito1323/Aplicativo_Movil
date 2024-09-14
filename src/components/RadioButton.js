// src/components/RadioButton.js
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const RadioButton = ({ label, value, selectedValue, onSelect }) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(value)}>
      <View style={[styles.circle, isSelected && styles.selected]}>
        {isSelected && <View style={styles.innerCircle} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  selected: {
    backgroundColor: '#1877f2',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  
});

export default RadioButton
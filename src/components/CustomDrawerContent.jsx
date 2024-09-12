// src/components/CustomDrawerContent.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from '../../src/styles/styles';

export default function CustomDrawerContent(props) {
  const { setIsLoggedIn } = props;

  const handleLogout = () => {
    setIsLoggedIn(false); // Cambiar el estado de isLoggedIn a false para cerrar sesión
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerMH}>
        <Text style={styles.titleMH}>Menú</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoutContainercs}>
        <Button title="Cerrar sesión" onPress={handleLogout} color="#FF6347"/>
      </View>
    </DrawerContentScrollView>
  );
}



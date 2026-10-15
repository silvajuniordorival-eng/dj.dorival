import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
export default function ProfileScreen() {
  return (
    <View style={styles.centerScreen}>
    <Text style={styles.screenTitle}> Perfil de Dorival </Text>
    <Text style={styles.screenSubtitle}> Gerencie suas informações aqui.</Text>
  );
}
const styles = Stylesheet.create ({
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F8F9A',
  },
  screenSubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  screenTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
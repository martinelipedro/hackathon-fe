import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For the water drop icon

const WaterReminder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Água</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: '50%' }]} /> 
        </View>
        <View style={styles.progressContent}>
          <Icon name="water-outline" size={20} color="#6699ff" />
          <Text style={styles.progressText}>Regue novamente em 4 dias</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acabei de Regar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f3',
    borderRadius: 10,
    marginVertical: 30,
  },
  title: {
    fontSize: 28.9,
    fontWeight: 'bold',
    color: '#1A4314', // Dark green color for title
    marginBottom: 15,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '100%',
    height: 35,
    backgroundColor: '#e0f0ff',
    borderRadius: 50,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#b3d1ff',
  },
  progressContent: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  progressText: {
    marginLeft: 5,
    color: '#6699ff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4378cc', // Blue background for button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WaterReminder;

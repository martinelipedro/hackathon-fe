import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For the water drop icon

interface ProgressButtonProps {
  progress: number; // Progress as a percentage (0 to 100)
  daysLeft: number; // Number of days remaining
}

const ProgressButton: React.FC<ProgressButtonProps> = ({ progress, daysLeft }) => {
  return (
    <View style={styles.container}>
      {/* Background Bar */}
      <View style={styles.backgroundBar}>
        {/* Progress Bar */}
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      
      {/* Icon and Text */}
      <View style={styles.content}>
        <Icon name="water" size={18} color="#3B82F6" />
        <Text style={styles.text}>em {daysLeft} dias</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120, // Adjust width as necessary
    height: 30,
    borderRadius: 15, // Rounded corners
    overflow: 'hidden', // Ensures the progress bar stays within the border
  },
  backgroundBar: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#E0ECFF', // Light blue background
    borderRadius: 15,
  },
  progressBar: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#B3D4FF', // Slightly darker blue for progress
    borderRadius: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // Ensure content is above the progress bar
  },
  text: {
    marginLeft: 5,
    color: '#3B82F6', // Text color matching the icon
    fontWeight: 'bold',
    fontSize: 14
  },
});

export default ProgressButton;
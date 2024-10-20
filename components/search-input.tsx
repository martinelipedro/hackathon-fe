// SearchInput.js

import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchInput = ({
  placeholder = '',
  onSearch = undefined,
  value = undefined,
  onChangeText = undefined,
  containerStyle = undefined,
  inputStyle = undefined,
  iconStyle = undefined,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder="Pesquisar"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity onPress={onSearch} style={styles.button}>
        <Icon name="search" size={20} color="#555" style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 2,
    flex: 0.95,
    height: 48,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  button: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
  },
});

export default SearchInput;

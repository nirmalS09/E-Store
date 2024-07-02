import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, kind, variant, size, iconOnly, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        kind === 'primary' && styles.primary,
        kind === 'secondary' && styles.secondary,
        variant === 'outline' && styles.outline,
        size === 'small' && styles.small,
        size === 'large' && styles.large,
        style,
      ]}
      onPress={onPress}
    >
      {!iconOnly && <Text style={[styles.buttonText, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#3498db',
  },
  secondary: {
    backgroundColor: '#95a5a6',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#3498db',
    backgroundColor: 'transparent',
  },
  small: {
    padding: 5,
  },
  large: {
    padding: 15,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Button;

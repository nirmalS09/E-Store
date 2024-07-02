import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        setError('User not registered. Please register first.');
        return;
      }

      const parsedUserData = JSON.parse(userData);
      if (parsedUserData.email === email && parsedUserData.password === password) {
        console.log('Login successful. User data:', parsedUserData);
        navigation.navigate('AppTabs');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/bgimage.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.registerContainer}>
          <Text style={styles.newUserText}>New to EC STORE?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Create your EC account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.61)', // To darken the background image
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  newUserText: {
    color: 'white',
    fontSize: 16,
  },
  registerText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default LoginScreen;

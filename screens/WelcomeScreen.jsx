import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import CustomButton from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/bgimage1.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            Welcome!!! {"\n"}
            The EC Store
          </Text>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/logo.jpg")}
            />
          </View>
          <Text style={styles.description}>
            Discover the latest in electronics and gadgets.
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Login"
              kind="primary"
              size="md"
              onPress={() => navigation.navigate('Login')}
              style={[styles.button, styles.loginButton]}
              textStyle={[styles.buttonText, styles.loginButtonText]}
            />
            <CustomButton
              title="Sign Up"
              kind="secondary"
              size="md"
              onPress={() => navigation.navigate('Register')}
              style={[styles.button, styles.signUpButton]}
              textStyle={[styles.buttonText, styles.signUpButtonText]}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'gold',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  loginButtonText: {
    color: 'white',
  },
  signUpButton: {
    backgroundColor: 'white',
    borderColor: '#3498db',
    borderWidth: 1,
  },
  signUpButtonText: {
    color: 'black',
  },
});

export default WelcomeScreen;

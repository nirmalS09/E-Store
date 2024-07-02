import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    image: 'https://via.placeholder.com/150',
  });

  const loadProfileData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setProfileData(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadProfileData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileData.image || 'https://via.placeholder.com/150' }} style={styles.profileImage} />
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.email}>{profileData.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;

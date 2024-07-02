import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', name: 'Hardware' },
  { id: '2', name: 'Software' },
  { id: '3', name: 'Desktops' },
  { id: '4', name: 'Processors' },
  { id: '5', name: 'Graphics Cards' },
  { id: '6', name: 'Others' },
  { id: '7', name: 'Connectivity' },
];

const ExploreScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToCategory = (category) => {
    console.log(`Navigating to category: ${category.name}`);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => navigateToCategory(item)}
    >
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search categories..."
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryList: {
    paddingBottom: 20,
  },
  categoryContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;

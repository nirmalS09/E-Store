import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import productsData from '../assets/products.json';

const ProductListScreen = ({ navigation }) => {
  const [viewMode, setViewMode] = useState('row');

  const navigateToProductDetails = (product) => {
    navigation.navigate('ProductDetailsHome', { product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.productContainer, viewMode === 'column' && styles.columnProductContainer]}
      onPress={() => navigateToProductDetails(item)}
    >
      <Image 
        source={{ uri: item.image }} 
        style={[styles.productImage, viewMode === 'column' && styles.columnProductImage]} 
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productRating}>Rating: {item.rating}/5</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button 
          title={`Switch to ${viewMode === 'row' ? 'Column' : 'Row'} View`} 
          onPress={() => setViewMode(viewMode === 'row' ? 'column' : 'row')} 
        />
      </View>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={[styles.productList, viewMode === 'column' && styles.columnProductList]}
        numColumns={viewMode === 'column' ? 2 : 1}
        key={viewMode === 'column' ? 'h' : 'v'} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    marginBottom: 20, 
  },
  productList: {
    paddingBottom: 20,
  },
  columnProductList: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  columnProductContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 10, 
    width: '45%', 
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 8,
  },
  columnProductImage: {
    width: '100%',
    height: 150,
    marginRight: 0,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
  },
  productRating: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default ProductListScreen;

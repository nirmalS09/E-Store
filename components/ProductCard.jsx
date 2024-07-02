import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{product.title}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Rating: {product.rating}</Text>
      <Text>Discount: {product.discount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ProductCard;

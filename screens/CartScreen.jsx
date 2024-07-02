import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { state, dispatch } = useContext(CartContext);

  const updateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { item, quantity } });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${parseFloat(item.price).toFixed(2)}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item, item.quantity - 1)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(item, item.quantity + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Proceed to checkout')}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 12,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  quantityButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  removeButton: {
    marginTop: 8,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;

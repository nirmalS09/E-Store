import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';

const BuyNowScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(CartContext); // Ensure CartContext is imported correctly

  const updateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { item, quantity } });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For simplicity, this example just logs the checkout action
    console.log('Proceed to checkout:', state.cart);
    // You can navigate to a confirmation screen or implement payment logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart Summary</Text>
      <FlatList
        data={state.cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Button title="Increase" onPress={() => updateQuantity(item, item.quantity + 1)} />
            <Button title="Decrease" onPress={() => updateQuantity(item, item.quantity - 1)} />
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <Button title="Proceed to Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  total: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default BuyNowScreen;

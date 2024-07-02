import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import reviewsData from '../assets/reviews.json';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { dispatch } = useContext(CartContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledReviews = shuffleArray(reviewsData.reviews);
    const selectedReviews = shuffledReviews.slice(0, 3);

    setReviews(selectedReviews);
  }, []);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    navigation.navigate('Cart');
  };

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Icon name="user-circle" size={24} color="#555" style={styles.profileIcon} />
        <Text style={styles.reviewText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productRating}>Rating: {product.rating}/5</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Button title="Add to Cart" onPress={addToCart} />
        <Text style={styles.sectionTitle}>Reviews:</Text>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderReviewItem}
          contentContainerStyle={styles.reviewsList}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  productInfo: {
    alignItems: 'center',
    width: '100%',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  productRating: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 20,
    color: 'green',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  reviewsList: {
    width: '100%',
  },
  reviewItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileIcon: {
    marginRight: 10,
  },
  reviewText: {
    fontSize: 14,
  },
});

export default ProductDetailsScreen;

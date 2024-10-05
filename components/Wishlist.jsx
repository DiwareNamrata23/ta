import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Wishlist() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Wishlist</Text>

      {/* Wishlist items */}
      <View style={styles.wishlistItem}>
        <Image source={require('../assets/img1.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>AERO SPORT INFINITY PRO</Text>
          <Text style={styles.productPrice}>Rp400.000</Text>
        </View>
      </View>

      <View style={styles.wishlistItem}>
        <Image source={require('../assets/img2.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>SPORT+ INVINCIBLE PRO</Text>
          <Text style={styles.productPrice}>Rp389.000</Text>
        </View>
      </View>

      <View style={styles.wishlistItem}>
        <Image source={require('../assets/img3.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>SPORT+ INVINCIBLE PRO</Text>
          <Text style={styles.productPrice}>Rp389.000</Text>
        </View>
      </View>

      {/* Add more items as needed */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wishlistItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  productInfo: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#ff7f50',
    marginTop: 5,
  },
});

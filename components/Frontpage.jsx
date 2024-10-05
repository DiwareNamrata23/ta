// Frontpage.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function Frontpage() {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      {/* Main Content Scrollable */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Sport Shoes</Text>
          <View style={styles.icons}>
            {/* Navigate to Wishlist when heart is clicked */}
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
              <AntDesign name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
  <Feather name="bell" size={24} color="black" />
</TouchableOpacity>

          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search items" style={styles.searchInput} />
        </View>

        {/* Wallet and Top-up section */}
        <View style={styles.walletSection}>
          <View style={styles.walletBox}>
            <Text style={styles.walletText}>Wallet balance</Text>
            <Text style={styles.balanceAmount}>Rp1.000.000</Text>
          </View>
          <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top up</Text>
          </TouchableOpacity>
        </View>

        {/* 15% Off Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>15% OFF</Text>
          <Text style={styles.bannerDescription}>All Items</Text>
        </View>

        {/* Shop by Category */}
        <View style={styles.categorySection}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>FOOTWEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>BAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>APPAREL</Text>
          </TouchableOpacity>
        </View>

        {/* For You Section */}
        <View style={styles.forYouSection}>
          {/* First product */}
          <TouchableOpacity style={styles.productCard}>
            <Image source={require('../assets/img1.png')} style={styles.productImage} />
            <Text style={styles.productName}>AIR LEGGING SPORT</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </TouchableOpacity>

          {/* Second product */}
          <TouchableOpacity style={styles.productCard}>
            <Image source={require('../assets/img2.png')} style={styles.productImage} />
            <Text style={styles.productName}>AERO-SHIFT AIR MAX</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </TouchableOpacity>

          {/* Third product */}
          {/* <TouchableOpacity style={styles.productCard}>
            <Image source={require('../assets/img3.png')} style={styles.productImage} />
            <Text style={styles.productName}>AERO-SHIFT AIR MAX</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>

      {/* Bottom Navigation (Sticky) */}
      <View style={styles.bottomNav}>
        {/* Home Icon */}
        <TouchableOpacity style={[styles.navItem, styles.active]}>
          <AntDesign name="home" size={24} color="#ff7f50" />
        </TouchableOpacity>

        {/* Swap Icon */}
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="swap" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* Ticket Icon */}
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="ticket" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* File Text Icon */}
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="filetext1" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* Profile Icon */}
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="user" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7f50',
    marginRight: 20,
  },
  icons: {
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  searchContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  walletBox: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  topUpButton: {
    backgroundColor: '#ff7f50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
  },
  topUpText: {
    color: '#fff',
    fontSize: 16,
  },
  banner: {
    backgroundColor: '#ff7f50',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bannerDescription: {
    color: '#fff',
    fontSize: 16,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  forYouSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  active: {
    backgroundColor: '#ffece3',
    borderRadius: 15,
  },
});

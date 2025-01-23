import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native';

const PharmacyScreen = ({ navigation }) => {
  const popularProducts = [
    { id: '1', name: 'Panadol', price: 'Rp 25.000', image: require('../assets/icons/panadol.png'), quantity: '25pcs' },
    { id: '2', name: 'Bodrex Herbal', price: 'Rp 8.000', image: require('../assets/icons/bodrex.png'), quantity: '10pcs' },
    { id: '3', name: 'Konidin', price: 'Rp 3.000', image: require('../assets/icons/konidin.png'), quantity: '15pcs' },
    { id: '4', name: 'OBH Combi', price: 'Rp 5.000', image: require('../assets/icons/obh.png'), quantity: '20pcs' },
    { id: '5', name: 'Betadine', price: 'Rp 30.000', image: require('../assets/icons/bodrex.png'), quantity: '50pcs' },
    { id: '6', name: 'Bodrexin', price: 'Rp 6.000', image: require('../assets/icons/konidin.png'), quantity: '30pcs' },
  ];

  const [searchText, setSearchText] = useState('');

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productQuantity}>{item.quantity}</Text>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('DetailScreen', { product: item })} 
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Judul Apotek */}
      <View style={styles.header}>
        <Text style={styles.title}>Apotek</Text>
      </View>

  
      <View style={styles.searchContainer}>
        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchText}
          placeholder="Cari produk..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Popular Products */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Produk Populer</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={popularProducts.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Produk Dijual</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={popularProducts.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

     
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Produk Lainnya</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={popularProducts.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 40,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginTop: 25,
    tintColor: '#000',
  },
  header: {
    marginTop: 140,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchText: {
    color: '#999',
    fontSize: 14,
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    paddingVertical: 5,
    marginLeft: -80,
  },
  viewAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginRight: 16,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    width: '100%',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'left',
    marginBottom: 4,
    width: '100%',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#black',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 2,
    padding: 2,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PharmacyScreen;

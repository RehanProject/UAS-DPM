import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const Cart2 = ({ navigation }) => {
  // State untuk daftar item keranjang
  const [cartItems, setCartItems] = useState([]);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(true);

  // Fungsi untuk menambah item ke keranjang
  const addItemToCart = (item) => {
    setCartItems(prevItems => {
      const newItems = [item, ...prevItems]; // Tambahkan item ke awal daftar
      if (newItems.length > 0) {
        setShowEmptyCartMessage(false); // Menyembunyikan pesan "Belum Ada Pesanan"
      }
      return newItems;
    });
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleDeleteItem = (itemName) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.name !== itemName);
      if (updatedItems.length === 0) {
        setShowEmptyCartMessage(true); // Menampilkan pesan "Belum Ada Pesanan" jika keranjang kosong
      }
      return updatedItems;
    });
  };

  // Fungsi untuk menangani klik pada status
  const handleStatusClick = (status) => {
    console.log(`Status ${status} diklik!`);
    if (status === 'Belum Bayar') {
      // Navigasi ke halaman Cart2 jika status yang dipilih adalah "Belum Bayar"
      navigation.navigate('Cart2');
    } else if (status === 'Dikemas') {
      // Navigasi ke halaman Cart3 jika status yang dipilih adalah "Dikemas"
      navigation.navigate('Cart3');
    } else if (status === 'Dikirim') {
      // Navigasi ke halaman Cart4 jika status yang dipilih adalah "Dikirim"
      navigation.navigate('Cart4');
    } else if (status === 'Selesai') {
      // Navigasi ke halaman Cart5 jika status yang dipilih adalah "Selesai"
      navigation.navigate('Cart5');
    }
  };
  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      
      <Text style={styles.title}>Keranjang Saya</Text>

     
      <View style={styles.statusContainer}>
        {[ 
          { status: 'Belum Bayar', icon: require('../assets/icons/belumbayar2.png'), isHighlighted: true },
          { status: 'Dikemas', icon: require('../assets/icons/dikemas.png'), isHighlighted: false },
          { status: 'Dikirim', icon: require('../assets/icons/dikirim.png'), isHighlighted: false },
          { status: 'Selesai', icon: require('../assets/icons/selesai.png'), isHighlighted: false },
        ].map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleStatusClick(item.status)} style={styles.statusTab}>
            <Image source={item.icon} style={styles.statusIcon} />
            <Text style={[styles.statusText, item.isHighlighted && styles.highlightedStatus]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
      {showEmptyCartMessage ? (
        <View style={styles.emptyCartContainer}>
          <Image source={require('../assets/icons/keranjang.png')} style={styles.emptyCartIcon} />
          <Text style={styles.emptyCartText}>Belum Ada Pesanan</Text>
        </View>
      ) : (
        <View style={styles.cartItemsContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSize}>{item.size}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteItem(item.name)}>
                <Image source={require('../assets/icons/delete.png')} style={styles.trashIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

 
      <View style={styles.additionalItemsContainer}>
        {[ 
          { name: 'OBH Combi', size: '75ml', price: 'Rp 5.000', image: require('../assets/icons/obh.png') },
          { name: 'Bodrexin', size: '75ml', price: 'Rp 6.000', image: require('../assets/icons/obh.png') },
          { name: 'Betadine', size: '50ml', price: 'Rp 30.000', image: require('../assets/icons/obh.png') },
          { name: 'Panadol', size: '20pcs', price: 'Rp 25.000', image: require('../assets/icons/obh.png') },
        ].map((item, index) => (
          <View key={index} style={styles.additionalItem}>
            <Image source={item.image} style={styles.additionalItemImage} />
            <View style={styles.additionalItemDetails}>
              <Text style={styles.additionalItemName}>{item.name}</Text>
              <Text style={styles.additionalItemSize}>{item.size}</Text>
              <View style={styles.additionalItemBottomRow}>
                <Text style={styles.additionalItemPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addItemToCart(item)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 70,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    tintColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 130,
    marginBottom: 20,
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  statusTab: {
    alignItems: 'center',
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginRight: 25,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginRight: 20,
  },
  highlightedStatus: {
    color: '#34C759', 
  },
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  emptyCartIcon: {
    width: 82,
    height: 75,
    marginRight: 30,
  },
  emptyCartText: {
    fontSize: 15,
    color: '#ccc',
    marginTop: 20,
  },
  cartItemsContainer: {
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSize: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34C759',
  },
  trashIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF6B6B',
    marginLeft: 10,
  },
  additionalItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  additionalItem: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  additionalItemImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  additionalItemDetails: {
    alignItems: 'flex-start',
    marginTop: 5,
    width: '100%',
  },
  additionalItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  additionalItemSize: {
    fontSize: 12,
    color: '#666',
  },
  additionalItemBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  additionalItemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#221F1F',
  },
  addButton: {
    width: 30,
    height: 30,
    backgroundColor: '#34C759',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Cart2;

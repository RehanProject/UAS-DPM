import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const Cart = ({ navigation }) => {
  // State untuk kuantitas produk dan daftar item keranjang
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([
    { name: 'OBH Combi', size: '75ml', price: 'Rp 5.000', image: require('../assets/icons/obh.png') },
    // Tambahkan item lainnya sesuai kebutuhan
  ]);

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
  

  // Fungsi untuk menambah kuantitas
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Fungsi untuk mengurangi kuantitas
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    } else {
      // Jika kuantitas kurang dari 1, tampilkan konfirmasi
      Alert.alert(
        'Hapus Barang',
        'Kuantitas sudah mencapai 0. Apakah Anda yakin ingin menghapus barang ini?',
        [
          { text: 'Tidak', style: 'cancel' },
          { text: 'Ya', onPress: () => handleDeleteItem('OBH Combi') },
        ]
      );
    }
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleDeleteItem = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };

  // Fungsi untuk menambah item ke keranjang
  const addItemToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Keranjang Saya</Text>

      {/* Status Tabs */}
      <View style={styles.statusContainer}>
        {[ // Data untuk setiap status
          { status: 'Belum Bayar', icon: require('../assets/icons/belumbayar.png') },
          { status: 'Dikemas', icon: require('../assets/icons/dikemas.png') },
          { status: 'Dikirim', icon: require('../assets/icons/dikirim.png') },
          { status: 'Selesai', icon: require('../assets/icons/selesai.png') },
        ].map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleStatusClick(item.status)} style={styles.statusTab}>
            <Image source={item.icon} style={styles.statusIcon} />
            <Text style={styles.statusText}>{item.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Cart Item */}
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemSize}>{item.size}</Text>
            <View style={styles.itemControls}>
              <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.itemPrice}>{item.price}</Text>
          {/* Tombol Delete untuk menghapus item */}
          <TouchableOpacity onPress={() => handleDeleteItem(item.name)}>
            <Image source={require('../assets/icons/delete.png')} style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      ))}

      {/* Additional Items */}
      <View style={styles.additionalItemsContainer}>
        {[ // Data untuk tambahan item
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
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
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
  itemControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    width: 25,
    height: 25,
    backgroundColor: '#34C759',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  quantityText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34C759',
    marginTop: 50,
    marginRight: -30,
  },
  trashIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF6B6B',
    marginLeft: 10,
    marginTop: -38,
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
    marginTop: 10,
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

export default Cart;

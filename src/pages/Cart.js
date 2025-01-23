import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const Cart = ({ navigation }) => {
  // State untuk daftar item keranjang
  const [cartItems, setCartItems] = useState([
    { name: 'OBH Combi', size: '75ml', price: 5000, quantity: 1, image: require('../assets/icons/obh.png') },
    // Tambahkan item lainnya sesuai kebutuhan
  ]);

  // Fungsi untuk menangani klik pada status
  const handleStatusClick = (status) => {
    console.log(`Status ${status} diklik!`);
    if (status === 'Belum Bayar') {
      navigation.navigate('Cart2');
    } else if (status === 'Dikemas') {
      navigation.navigate('Cart3');
    } else if (status === 'Dikirim') {
      navigation.navigate('Cart4');
    } else if (status === 'Selesai') {
      navigation.navigate('Cart5');
    }
  };

  // Fungsi untuk menambah kuantitas item
  const incrementQuantity = (itemName) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Fungsi untuk mengurangi kuantitas item
  const decrementQuantity = (itemName) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.name === itemName && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
      )
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleDeleteItem = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };

  // Fungsi untuk menambah item ke keranjang
  const addItemToCart = (item) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const itemExists = prevItems.find(cartItem => cartItem.name === item.name);
      if (itemExists) {
        // If it exists, update the quantity
        return prevItems.map(cartItem =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        // If it doesn't exist, add it to the cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Fungsi untuk menghitung total harga
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
              <TouchableOpacity onPress={() => decrementQuantity(item.name)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.name)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.itemPrice}>Rp {item.price * item.quantity}</Text>
          {/* Tombol Delete untuk menghapus item */}
          <TouchableOpacity onPress={() => handleDeleteItem(item.name)}>
            <Image source={require('../assets/icons/delete.png')} style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      ))}

      {/* Additional Items */}
      <View style={styles.additionalItemsContainer}>
        {[ // Data untuk tambahan item
          { name: 'OBH Combi', size: '75ml', price: 5000, image: require('../assets/icons/obh.png') },
          { name: 'Bodrexin', size: '75ml', price: 6000, image: require('../assets/icons/obh.png') },
          { name: 'Betadine', size: '50ml', price: 30000, image: require('../assets/icons/obh.png') },
          { name: 'Panadol', size: '20pcs', price: 25000, image: require('../assets/icons/obh.png') },
        ].map((item, index) => (
          <View key={index} style={styles.additionalItem}>
            <Image source={item.image} style={styles.additionalItemImage} />
            <View style={styles.additionalItemDetails}>
              <Text style={styles.additionalItemName}>{item.name}</Text>
              <Text style={styles.additionalItemSize}>{item.size}</Text>
              <View style={styles.additionalItemBottomRow}>
                <Text style={styles.additionalItemPrice}>Rp {item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addItemToCart(item)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Harga: Rp {calculateTotalPrice()}</Text>
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
  },
  statusText: {
    fontSize: 12,
    color: '#666',
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
  totalContainer: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34C759',
  },
});

export default Cart;

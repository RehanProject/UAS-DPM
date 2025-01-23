import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Cart5 = ({ navigation }) => {
  const statusTabs = [
    { status: 'Belum Bayar', icon: require('../assets/icons/belumbayar.png'), isHighlighted: false },
    { status: 'Dikemas', icon: require('../assets/icons/dikemas.png'), isHighlighted: false },
    { status: 'Dikirim', icon: require('../assets/icons/dikirim.png'), isHighlighted: false },
    { status: 'Selesai', icon: require('../assets/icons/selesai2.png'), isHighlighted: true },
  ];

  const medicines = [
    { name: 'OBH Combi', size: '75ml', price: 'Rp 5.000', image: require('../assets/icons/obh.png') },
    { name: 'Paracetamol', size: '100ml', price: 'Rp 12.000', image: require('../assets/icons/obh.png') },
  ];

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

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Keranjang Saya</Text>

      <View style={styles.statusContainer}>
        {statusTabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.statusTab}
            onPress={() => handleStatusClick(tab.status)} // Menambahkan onPress
          >
            <Image source={tab.icon} style={styles.statusIcon} />
            <Text style={[styles.statusText, tab.isHighlighted && styles.highlighted]}>{tab.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Gabungkan Obat dan Total Pesanan dalam satu kotak */}
      <View style={styles.cartContainer}>
        <View style={styles.itemsContainer}>
          {medicines.map((med, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={med.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{med.name}</Text>
                <Text style={styles.itemSize}>{med.size}</Text>
                <Text style={styles.itemQuantity}>1 produk</Text>
                <Text style={styles.itemPrice}>{med.price}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Total Pesanan di bawah gambar obat */}
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total Pesanan: Rp 17.000</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Pharmacy')} style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Beli Lagi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 15,
    zIndex: 1,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 130,
    marginVertical: 20,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  statusTab: {
    alignItems: 'center',
    flex: 1,
  },
  statusIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#888',
  },
  highlighted: {
    color: '#34C759',
    fontWeight: 'bold',
  },
  cartContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemsContainer: {
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 15,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSize: {
    fontSize: 12,
    color: '#888',
    marginVertical: 2,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#black',
    marginTop: 5,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buyButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Cart5;

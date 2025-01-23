import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Cart4 = ({ navigation }) => {
  const [isOrderReceived, setIsOrderReceived] = useState(false);

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
  const handleConfirmOrder = () => {
    setIsOrderReceived(true); // Mengubah status setelah pesanan diterima
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Pesanan Saya</Text>

      {/* Status Tabs */}
      <View style={styles.statusContainer}>
        {[ 
          { status: 'Belum Bayar', icon: require('../assets/icons/belumbayar.png'), isHighlighted: false },
          { status: 'Dikemas', icon: require('../assets/icons/dikemas.png'), isHighlighted: false },
          { status: 'Dikirim', icon: require('../assets/icons/dikirim2.png'), isHighlighted: true, iconStyle: styles.largeIcon },
          { status: 'Selesai', icon: require('../assets/icons/selesai.png'), isHighlighted: false },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleStatusClick(item.status)}
            style={styles.statusTab}
          >
            <Image source={item.icon} style={[styles.statusIcon, item.iconStyle]} />
            <Text style={[styles.statusText, item.isHighlighted && styles.highlightedStatus]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Combined Order and Delivery Info */}
      {!isOrderReceived ? (
        <View style={styles.orderAndDeliveryContainer}>
          <View style={styles.productContainer}>
            <Image source={require('../assets/icons/obh.png')} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>OBH Combi</Text>
              <Text style={styles.productDetail}>75ml</Text>
              <View style={styles.productFooter}>
                <Text style={styles.productCount}>1 produk</Text>
                <Text style={styles.productPrice}>Rp 5.000</Text>
              </View>
            </View>
          </View>

          {/* Delivery Info */}
          <View style={styles.deliveryContainer}>
            <Image source={require('../assets/icons/pesananditerima.png')} style={styles.deliveryIcon} />
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryText}>
                [KOTA PEKANBARU] Paket telah diterima oleh [Rosni Dwita]
              </Text>
              <Text style={styles.deliveryNote}>Konfirmasi terima produk sebelum 09-12-2024</Text>
              {/* Confirm Button */}
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
                <Text style={styles.confirmButtonText}>Pesanan Diterima</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../assets/icons/panahkesamping.png')} style={styles.arrowIcon} />
          </View>
        </View>
      ) : (
        <View style={styles.noOrderContainer}>
          <Text style={styles.noOrderText}>Pesanan sudah diterima.</Text>
        </View>
      )}
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
  largeIcon: {
    width: 25,
    height: 18,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  highlightedStatus: {
    color: '#34C759',
  },
  orderAndDeliveryContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productCount: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  deliveryIcon: {
    width: 25,
    height: 25,
    marginBottom: 70,
    marginRight: 15,
  },
  deliveryInfo: {
    flex: 1,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34C759',
    marginBottom: 5,
  },
  deliveryNote: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  arrowIcon: {
    width: 20,
    marginTop: -80,
    marginRight: -10,
    height: 20,
  },
  confirmButton: {
    backgroundColor: '#34C759',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  confirmButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  noOrderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noOrderText: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
});

export default Cart4;

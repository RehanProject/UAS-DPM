import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';

const LocationDetailScreen2 = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Untuk menampilkan modal pembayaran berhasil

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Detail Pesanan</Text>
      </View>

      {/* First Order Box */}
      <View style={styles.orderBox}>
        <View style={styles.orderBoxHeader}>
          <TouchableOpacity>
            <Image source={require('../assets/icons/delete.png')} style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.orderDetails}>
          <Image source={require('../assets/icons/panadol.png')} style={styles.orderImage} />
          <View style={styles.orderTextContainer}>
            <Text style={styles.orderTitleLeft}>OBH Combi</Text>
            <Text style={styles.orderVolume}>75ml</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantity}>
                <TouchableOpacity style={styles.minusButton}><Text>-</Text></TouchableOpacity>
                <Text style={styles.quantityValue}>1</Text>
                <TouchableOpacity style={styles.plusButton}><Text>+</Text></TouchableOpacity>
              </View>
              <Text style={styles.orderPrice}>Rp. 25.000</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetails}>
        <Text style={styles.paymentTitle}>Detail Pembayaran</Text>

        {/* Row untuk Total */}
        <View style={styles.paymentRow}>
          <Text style={[styles.paymentLabel, styles.paymentTotal]}>Total</Text>
          <Text style={[styles.paymentValue, styles.paymentTotal]}>Rp. 25.000</Text>
        </View>

        {/* Row untuk Pajak */}
        <View style={styles.paymentRow}>
          <Text style={[styles.paymentLabel, styles.paymentTax]}>Pajak</Text>
          <Text style={[styles.paymentValue, styles.paymentTax]}>Rp. 2.000</Text>
        </View>

        {/* Row untuk Total Akhir */}
        <View style={styles.paymentRow}>
          <Text style={[styles.paymentLabel, styles.paymentFinalTotal]}>Total</Text>
          <Text style={[styles.paymentValue, styles.paymentFinalTotal]}>Rp. 27.000</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Payment Method */}
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethodTitle}>Metode Pembayaran</Text>
        <View style={styles.paymentMethodBox}>
          <Image source={require('../assets/icons/dana.png')} style={styles.paymentMethodIcon} />
          <Text style={styles.paymentMethodText}>Dana</Text>
          <TouchableOpacity style={styles.changeButton}><Text>Ubah</Text></TouchableOpacity>
        </View>

        {/* Total Row and Pay Button */}
        <View style={styles.totalRowContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rp. 27.000</Text>
          </View>

          {/* Payment Button next to Total */}
          <TouchableOpacity style={styles.payButton} onPress={() => setPaymentSuccess(true)}>
            <Text style={styles.payButtonText}>Bayar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Payment Success */}
      <Modal
        transparent={true}
        visible={paymentSuccess}
        animationType="fade"
        onRequestClose={() => setPaymentSuccess(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image source={require('../assets/icons/ceklis.png')} style={styles.successIcon} />
            <Text style={styles.successTitle}>Pembayaran Berhasil</Text>
            <Text style={styles.successDescription}>
              Pembayaran Anda telah berhasil, Anda dapat menunggu barang pesanan Anda sampai ke alamat tujuan.
            </Text>

            {/* Green Button to go back to Home */}
            <TouchableOpacity style={styles.greenButton} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.greenButtonText}>Kembali ke Beranda</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(64, 124, 226, 0.13)', 
    marginBottom: 30,
    padding: 8,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  orderBoxHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  orderTitleLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  trashIcon: {
    width: 20,
    height: 20,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -20,
  },
  orderImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  orderTextContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  orderVolume: {
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minusButton: {
    paddingHorizontal: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
  },
  plusButton: {
    paddingHorizontal: 7,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  quantityValue: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 95,
  },
  paymentDetails: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  paymentLabel: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  paymentValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentTotal: {
    fontSize: 14,
    fontWeight: 'medium',
  },
  paymentTax: {
    fontSize: 14,
    fontWeight: 'medium',
  },
  paymentFinalTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  paymentMethod: {
    paddingHorizontal: 16,
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentMethodBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(64, 124, 226, 0.13)', 
    padding: 10,
    borderRadius: 10,
  },
  paymentMethodIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  paymentMethodText: {
    flex: 1,
    fontSize: 14,
  },
  changeButton: {
    paddingHorizontal: 10,
  },
  totalRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  payButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  successIcon: {
    width: 100,
    height: 100,

  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  successDescription: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'medium',
    marginVertical: 10,
  },
  greenButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 32,
    marginTop: 20,
  },
  greenButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LocationDetailScreen2;

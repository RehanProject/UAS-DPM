import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const Layanan = ({ navigation }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false); // For displaying payment success modal

  // Function to show alert when a button is pressed
  const showStatusAlert = (status) => {
    Alert.alert('Status Ambulance', `Status ambulance: ${status}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Title without Header */}
      <Text style={styles.title}>Histori Ambulance</Text>

      {/* In Progress Section */}
      <Text style={styles.statusTitle}>Dalam Perjalanan</Text>
      <View style={styles.statusBox}>
        <View style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nama: Rosni Dwita</Text>
            <Text style={styles.infoLabel}>No.Tlp: 08123456789</Text>
            <Text style={styles.infoLabel}>Alamat: Jl. Karya 1</Text>
            <Text style={styles.infoLabel}>Tipe: Medis</Text>
            <Text style={styles.infoLabel}>Tanggal: 09/12/2024 - 13:00</Text>
          </View>
          <TouchableOpacity style={styles.inProgressButton} onPress={() => showStatusAlert('Dalam Perjalanan')}>
            <Text style={styles.inProgressButtonText}>Dalam Perjalanan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Completed Section */}
      <Text style={styles.statusTitle}>Selesai</Text>
      <View style={styles.statusBox}>
        <View style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nama: Rosni Dwita</Text>
            <Text style={styles.infoLabel}>No.Tlp: 08123456789</Text>
            <Text style={styles.infoLabel}>Alamat: Jl. Karya 1</Text>
            <Text style={styles.infoLabel}>Tipe: Medis</Text>
            <Text style={styles.infoLabel}>Tanggal: 09/12/2024 - 13:00</Text>
          </View>
          <TouchableOpacity style={styles.completedButton} onPress={() => showStatusAlert('Selesai')}>
            <Text style={styles.completedButtonText}>Selesai</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Canceled Section */}
      <Text style={styles.statusTitle}>Dibatalkan</Text>
      <View style={styles.statusBox}>
        <View style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoLabel}>Nama: Rosni Dwita</Text>
            <Text style={styles.infoLabel}>No.Tlp: 08123456789</Text>
            <Text style={styles.infoLabel}>Alamat: Jl. Karya 1</Text>
            <Text style={styles.infoLabel}>Tipe: Medis</Text>
            <Text style={styles.infoLabel}>Tanggal: 09/12/2024 - 13:00</Text>
          </View>
          <TouchableOpacity style={styles.canceledButton} onPress={() => showStatusAlert('Dibatalkan')}>
            <Text style={styles.canceledButtonText}>Dibatalkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background for the whole page
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
    marginTop: 30,
    tintColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16, // Position the status title a bit to the left
  },
  statusBox: {
    marginBottom: 20,
    padding: 10, // Smaller padding to reduce the box size
    borderRadius: 8,
    backgroundColor: '#F5F6F6', // Light gray background for the status boxes
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F6F6',
    borderRadius: 8,
    padding: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  inProgressButton: {
    backgroundColor: '#FFEB3B',
    paddingVertical: 8, // Smaller padding
    paddingHorizontal: 16, // Smaller padding
    borderRadius: 8,
    marginLeft: 'auto', // Align button to the right
  },
  inProgressButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  completedButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8, // Smaller padding
    paddingHorizontal: 16, // Smaller padding
    borderRadius: 8,
    marginLeft: 'auto', // Align button to the right
  },
  completedButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  canceledButton: {
    backgroundColor: '#F44336',
    paddingVertical: 8, // Smaller padding
    paddingHorizontal: 16, // Smaller padding
    borderRadius: 8,
    marginLeft: 'auto', // Align button to the right
  },
  canceledButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Layanan;

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const LocationDetailScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Location Details */}
      <View style={styles.header}>
        <Text style={styles.title}>Detail Lokasi</Text>

        {/* Search Container */}
        <View style={styles.searchContainer}>
          <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchText}
            placeholder="Cari lokasi..."
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>

      {/* Map Image (Background) */}
      <Image source={require('../assets/icons/peta.png')} style={styles.mapImage} />

      {/* Location Box with Confirmation */}
      <View style={styles.locationConfirmBox}>
        <Text style={styles.locationConfirmTitle}>Konfirmasi Lokasi</Text>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Location Info */}
        <View style={styles.locationInfo}>
          <Image source={require('../assets/icons/icon-peta.png')} style={styles.locationIcon} />
          <Text style={styles.locationAddress}>
            Jl. Karya I, belakang UIR, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28284
          </Text>
        </View>

        {/* Confirm Location Button */}
        <TouchableOpacity 
          style={styles.confirmButton} 
          onPress={() => navigation.navigate('LocationDetailScreen2')} // Navigate to the next screen
        >
          <Text style={styles.confirmButtonText}>Konfirmasi Lokasi</Text>
        </TouchableOpacity>
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
    marginTop: 120, // Adjust the margin to create space for the back button
    marginBottom: 20, // Add space between the title and next section
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Ensures content appears above map
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
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
    zIndex: 3, // Makes sure the search bar is above the map
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
  mapImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginTop: -60, // Adds space between the search container and the map
    zIndex: 1, // Keeps the map image behind the content
  },
  locationConfirmBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginTop: 30, // Moves the confirmation box below the map image
  },
  locationConfirmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationIcon: {
    width: 23,
    height: 20,
    tintColor: '#4CAF50',
    marginRight: 10,
  },
  locationAddress: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LocationDetailScreen;

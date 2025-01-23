import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const HospitalScreen = ({ navigation }) => {
  const hospitals = [
    {
      id: '1',
      name: 'RS Awal Bros Panam',
      address: 'Jl. Soebrantas No.88, Kec. Tampan, Kota Pekanbaru',
      distance: '2-3 min',
      icon: require('../assets/icons/rs.png'),
      ambulanceIcon: require('../assets/icons/ambulance.png'),
    },
    {
      id: '2',
      name: 'RS Prima Pekanbaru',
      address: 'Jl. Bima No.1, Delima, Kec. Tampan, Kota Pekanbaru',
      distance: '5-7 min',
      icon: require('../assets/icons/rs.png'),
      ambulanceIcon: require('../assets/icons/ambulance.png'),
    },
    {
      id: '3',
      name: 'RS Aulia Hospital',
      address: 'Jl. HR. Soebrantas No.63, Tuah Madani, Kota Pekanbaru',
      distance: '10-15 min',
      icon: require('../assets/icons/rs.png'),
      ambulanceIcon: require('../assets/icons/ambulance.png'),
    },
    {
      id: '4',
      name: 'RSUD Arifin Achmad',
      address: 'Jl. Diponegoro No.2, Sumahilang, Kota Pekanbaru',
      distance: '20-25 min',
      icon: require('../assets/icons/rs.png'),
      ambulanceIcon: require('../assets/icons/ambulance.png'),
    },
    {
      id: '5',
      name: 'RS Santa Maria',
      address: 'Jl. Jend. Ahmad Yani No.68, Sukajadi, Kota Pekanbaru',
      distance: '30-40 min',
      icon: require('../assets/icons/rs.png'),
      ambulanceIcon: require('../assets/icons/ambulance.png'),
    },
  ];

  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Hasil Pencarian</Text>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchText}
          placeholder="Cari Rumah Sakit..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Hospital List */}
      {hospitals
        .filter(hospital => hospital.name.toLowerCase().includes(searchText.toLowerCase()))
        .map((hospital) => (
          <TouchableOpacity
            key={hospital.id}
            style={styles.card}
            onPress={() => navigation.navigate('LocationDetailScreen3', { hospitalId: hospital.id })} // Navigate to LocationDetailScreen3
          >
            <Image source={hospital.icon} style={styles.hospitalIcon} />
            <View style={styles.cardContent}>
              <Text style={styles.hospitalName}>{hospital.name}</Text>
              <Text style={styles.hospitalAddress}>{hospital.address}</Text>
              {/* Ambulance icon and distance */}
              <View style={styles.distanceContainer}>
                <Image source={hospital.ambulanceIcon} style={styles.ambulanceIcon} />
                <Text style={styles.hospitalDistance}>{hospital.distance}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Image source={require('../assets/icons/telpon.png')} style={styles.callIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 1,
    top: 40,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginTop: 25,
    tintColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 140,
    marginBottom: 20,
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
    zIndex: 3, 
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4EFD2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  hospitalIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  hospitalAddress: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ambulanceIcon: {
    width: 20,
    height: 12,
    marginRight: 5,
  },
  hospitalDistance: {
    fontSize: 14,
    color: '#999',
  },
  callButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  callIcon: {
    width: 30,
    height: 30,
  },
});

export default HospitalScreen;

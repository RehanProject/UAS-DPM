import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const DetailDokter = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorData);

  // Fungsi untuk menangani pencarian dan memfilter data dokter berdasarkan nama atau spesialis
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = doctorData.filter(doctor =>
      doctor.name.toLowerCase().includes(text.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  // Fungsi untuk menangani klik tombol chat
  const handleChatClick = (doctor) => {
    navigation.navigate('DetailDokter2', { doctor });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Cari dokter, spesialis..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Rekomendasi Dokter</Text>
      <Text style={styles.subtitle}>Konsultasi online dengan dokter siaga kami</Text>

      {/* Doctor List */}
      <View style={styles.doctorGrid}>
        {filteredDoctors.map((doctor, index) => (
          <View key={index} style={styles.doctorCard}>
            <Image source={doctor.image} style={styles.doctorImage} />
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            <View style={styles.ratingContainer}>
              <Image source={require('../assets/icons/bintang.png')} style={styles.starIcon} />
              <Text style={styles.rating}>{doctor.rating}</Text>
            </View>
            <View style={styles.priceChatContainer}>
              <Text style={styles.price}>{doctor.price}</Text>
              <TouchableOpacity style={styles.chatButton} onPress={() => handleChatClick(doctor)}>
                <Text style={styles.chatButtonText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const doctorData = [
  {
    name: 'Dr. Rishi',
    specialty: 'Dokter umum',
    rating: '4.7',
    price: 'Rp 72.000',
    image: require('../assets/icons/rishi.png'),
  },
  {
    name: 'Dr. Vana',
    specialty: 'Spesialis Kulit',
    rating: '4.8',
    price: 'Rp 83.000',
    image: require('../assets/icons/vana.png'),
  },
  {
    name: 'Dr. Arasi',
    specialty: 'Spesialis THT',
    rating: '4.6',
    price: 'Rp 63.000',
    image: require('../assets/icons/arashi.png'),
  },
  {
    name: 'Dr. Ranti',
    specialty: 'Psikiater',
    rating: '4.5',
    price: 'Rp 68.000',
    image: require('../assets/icons/ranti.png'),
  },
  {
    name: 'Dr. Dodi',
    specialty: 'Dokter Gigi',
    rating: '4.3',
    price: 'Rp 32.000',
    image: require('../assets/icons/vana.png'),
  },
  {
    name: 'Dr. Tirta',
    specialty: 'Spesialis Saraf',
    rating: '4.5',
    price: 'Rp 55.000',
    image: require('../assets/icons/tirta.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 80,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    tintColor: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 16,
    marginTop: 150,
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
  searchInput: {
    color: '#999',
    fontSize: 14,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  doctorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starIcon: {
    width: 14,
    height: 14,
    tintColor: '#FFD700',
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  priceChatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DetailDokter;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const ServiceBox = ({ title, icon, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity style={[styles.serviceBox, { backgroundColor }]} onPress={onPress}>
      <Image source={icon} style={styles.serviceIcon} />
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState({}); // State untuk menyimpan artikel yang di-bookmark
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState(''); // State untuk menyimpan jenis kelamin pengguna
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  // Fungsi untuk mengambil data pengguna dari AsyncStorage
  const getUserData = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    if (userData && userData.username) {
      setUsername(userData.username); // Ambil nama pengguna yang disimpan
      setGender(userData.gender); // Ambil jenis kelamin pengguna
      setAddress(userData.address); // Ambil alamat pengguna
      setAge(userData.age); // Ambil umur pengguna
    }
  };

  useEffect(() => {
    getUserData(); // Ambil data pengguna saat pertama kali load
  }, []);

  // Menggunakan navigation.addListener untuk memperbarui data saat kembali ke halaman HomeScreen
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserData(); // Mengambil data terbaru dari AsyncStorage setiap kali HomeScreen di-fokuskan
    });

    return unsubscribe; // Membersihkan listener saat komponen dibersihkan
  }, [navigation]);

  const toggleBookmark = (articleId) => {
    setBookmarkedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));

    if (!bookmarkedArticles[articleId]) {
      Alert.alert("Artikel Disimpan", "Artikel berhasil disimpan ke daftar favorit Anda.", [{ text: "OK" }]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#6EDC6E', '#6FCF7E', '#71AFA7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/icons/profil.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.location}>
              {address} - {gender === 'female' ? 'Perempuan' : 'Laki-laki'}, {age} tahun
            </Text>
          </View>
          <Image
            source={require('../assets/icons/notif.png')}
            style={styles.notificationIcon}
          />
        </View>
      </LinearGradient>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/icons/search.png')}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Cari dokter, obat, artikel...</Text>
      </View>

      {/* Service Boxes */}
      <View style={styles.serviceContainer}>
        <ServiceBox
          title="Layanan Darurat"
          icon={require('../assets/icons/layanandarurat.png')}
          backgroundColor="#FFBABA"
          onPress={() => navigation.navigate('Hospital')}
        />
        <ServiceBox
          title="Apotek"
          icon={require('../assets/icons/obat.png')}
          backgroundColor="#EAF2FF"
          onPress={() => navigation.navigate('Pharmacy')}
        />
        <ServiceBox
          title="Konsul Online"
          icon={require('../assets/icons/konsul.png')}
          backgroundColor="#EAF2FF"
          onPress={() => navigation.navigate('DetailDokter')}
        />
      </View>

      {/* Article Section */}
      <View style={styles.articleSection}>
        <Text style={styles.sectionTitle}>Artikel Kesehatan</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* Articles */}
      <View style={styles.articleContainer}>
        {/* Article 1 */}
        <View style={styles.articleBox}>
          <Image
            source={require('../assets/icons/artikel1.png')}
            style={styles.articleImage}
          />
          <View style={styles.articleTextContainer}>
            <Text style={styles.articleTitle} numberOfLines={2}>
              25 Buah Tersehat yang Bisa Anda Makan Menurut Ahli Gizi
            </Text>
            <Text style={styles.articleMeta}>Jun 10, 2024 · 5min dibaca</Text>
          </View>
          <TouchableOpacity
            style={styles.bookmarkIconContainer}
            onPress={() => toggleBookmark('artikel1')}
          >
            <Image
              source={
                bookmarkedArticles['artikel1']
                  ? require('../assets/icons/bookmarkhijau.png')
                  : require('../assets/icons/bookmark.png')
              }
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Article 2 */}
        <View style={styles.articleBox}>
          <Image
            source={require('../assets/icons/artikel2.png')}
            style={styles.articleImage}
          />
          <View style={styles.articleTextContainer}>
            <Text style={styles.articleTitle} numberOfLines={2}>
              Dampak COVID-19 pada Sistem Layanan Kesehatan
            </Text>
            <Text style={styles.articleMeta}>Jul 10, 2024 · 5min dibaca</Text>
          </View>
          <TouchableOpacity
            style={styles.bookmarkIconContainer}
            onPress={() => toggleBookmark('artikel2')}
          >
            <Image
              source={
                bookmarkedArticles['artikel2']
                  ? require('../assets/icons/bookmarkhijau.png')
                  : require('../assets/icons/bookmark.png')
              }
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Article 3 */}
        <View style={styles.articleBox}>
          <Image
            source={require('../assets/icons/artikel3.png')}
            style={styles.articleImage}
          />
          <View style={styles.articleTextContainer}>
            <Text style={styles.articleTitle} numberOfLines={2}>
              Apa yang dimaksud dengan Krisis Replikasi?
            </Text>
            <Text style={styles.articleMeta}>Jul 24, 2024 · 5min dibaca</Text>
          </View>
          <TouchableOpacity
            style={styles.bookmarkIconContainer}
            onPress={() => toggleBookmark('artikel3')}
          >
            <Image
              source={
                bookmarkedArticles['artikel3']
                  ? require('../assets/icons/bookmarkhijau.png')
                  : require('../assets/icons/bookmark.png')
              }
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
    paddingBottom: 50,
    marginHorizontal: -16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginTop: -30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchText: {
    color: '#999',
    fontSize: 14,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceBox: {
    width: '30%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center',
  },
  articleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 14,
    color: '#36A9E1',
  },
  articleContainer: {
    marginBottom: 20,
  },
  articleBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
  },
  articleImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  articleTextContainer: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  articleMeta: {
    fontSize: 12,
    color: '#999',
  },
  bookmarkIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkIcon: {
    width: 10,
    height: 20,
    marginTop: -25,
  },
});

export default HomeScreen;

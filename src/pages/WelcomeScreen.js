import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ganti ke expo-linear-gradient

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#6EDC6E', '#6FCF7E', '#71AFA7']} // Tiga warna gradasi
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require('../assets/icons/logo.png')} // Pastikan path gambar logo benar
        style={styles.logo}
      />

      {/* Teks Selamat Datang */}
      <Text style={styles.title}>Selamat Datang!</Text>
      <Text style={styles.subtitle}>
        Kini kesehatan Anda dalam satu tempat dan selalu terkontrol.
      </Text>

      {/* Tombol Masuk */}
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonTextPrimary}>Masuk</Text>
      </TouchableOpacity>

      {/* Tombol Buat Akun */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonTextSecondary}>Buat Akun</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: -50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonPrimary: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#000', // Warna hitam
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextPrimary: {
    color: '#fff', // Warna teks putih
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#fff', // Warna putih
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonTextSecondary: {
    color: '#000', // Warna teks hitam
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

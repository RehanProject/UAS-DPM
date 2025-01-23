import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Impor AsyncStorage

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // Mengambil data pengguna yang telah disimpan di AsyncStorage
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));

    // Memverifikasi username dan password
    if (userData && userData.username === username && userData.password === password) {
      // Login berhasil, pindah ke halaman HomeScreen
      navigation.navigate('Home', { userData: userData });
    } else {
      Alert.alert("Login Gagal", "Nama pengguna atau password salah.");
    }
  };

  return (
    <LinearGradient
      colors={['#6EDC6E', '#6FCF7E', '#71AFA7']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Hai, Selamat Datang!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Pengguna"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Belum punya akun?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Register')}
        >
          Daftar
        </Text>
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  buttonPrimary: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  signupLink: {
    color: '#007BFF',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});

export default LoginScreen;

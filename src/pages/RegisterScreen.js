import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Modal, FlatList, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [age, setAge] = useState(''); 
  const [isGenderModalVisible, setIsGenderModalVisible] = useState(false); 

  // Validasi form
  const handleCreateAccount = async () => {
    // Memastikan semua kolom diisi
    if (!username || !email || !password || !address || !gender || !age) {
      Alert.alert('Error', 'Semua kolom harus diisi');
      return;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Email tidak valid');
      return;
    }

    
    if (isNaN(age) || age <= 0) {
      Alert.alert('Error', 'Umur harus berupa angka yang valid');
      return;
    }

    // Menyimpan data pengguna ke AsyncStorage
    const userData = {
      username: username,
      email: email,
      password: password,
      address: address,
      gender: gender,
      age: age,
    };
    await AsyncStorage.setItem('userData', JSON.stringify(userData));

    // Menampilkan notifikasi bahwa akun berhasil dibuat
    Alert.alert(
      "Akun Berhasil Dibuat!",
      "Akun Anda telah berhasil dibuat. Silakan login.",
      [
        {
          text: "OK",
          onPress: () => {
            // Menavigasi ke halaman Login setelah klik OK
            navigation.replace('Login');
          }
        }
      ]
    );
  };

  const genderOptions = ['Laki-laki', 'Perempuan'];

  return (
    <LinearGradient
      colors={['#6EDC6E', '#6FCF7E', '#71AFA7']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 40, color: 'black' }}>←</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/icons/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Buat Akun</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Pengguna"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Menampilkan keyboard untuk email
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />

      {/* Gender input with dropdown modal */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsGenderModalVisible(true)}
      >
        <Text style={styles.inputText}>{gender || 'Jenis Kelamin'}</Text>
        <Text style={styles.dropdownText}>▼</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Umur"
        keyboardType="numeric" // Mengarahkan keyboard ke angka
        value={age}
        onChangeText={setAge}
      />

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Buat Akun</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        <Text style={styles.termsWhite}>Dengan membuat akun atau masuk, Anda setuju dengan </Text>
        <Text style={styles.termsBlackBold}>Syarat dan Ketentuan kami.</Text>
      </Text>

      {/* Modal for Gender Selection */}
      <Modal
        transparent={true}
        visible={isGenderModalVisible}
        animationType="fade"
        onRequestClose={() => setIsGenderModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pilih Jenis Kelamin</Text>
            <FlatList
              data={genderOptions}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    setGender(item);
                    setIsGenderModalVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </Modal>
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
    width: 200,
    height: 300,
    marginBottom: -90,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  buttonPrimary: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  terms: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  termsWhite: {
    color: '#fff',
  },
  termsBlackBold: {
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
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
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default RegisterScreen;

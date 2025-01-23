import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [dataSaved, setDataSaved] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setUserName(parsedData.username || '');
        setPassword(parsedData.password || '');
        setAddress(parsedData.address || '');
        setEmail(parsedData.email || '');
        setPhone(parsedData.phone || '');
        setGender(parsedData.gender || '');
        setAge(parsedData.age || '');
      }
    };
    loadData();
  }, []);

  const handleSave = async () => {
    const userData = {
      username: userName,
      password: password,
      address: address,
      email: email,
      phone: phone,
      gender: gender,
      age: age,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      setDataSaved(true);
      setTimeout(() => {
        setDataSaved(false);
        navigation.goBack();
      }, 2000);
    } catch (error) {
      Alert.alert('Error', 'Gagal menyimpan data. Coba lagi.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Nama Pengguna"
          value={userName}
          onChangeText={setUserName}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Alamat"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Gender selection using TouchableOpacity */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <View style={styles.genderOptions}>
          <TouchableOpacity 
            style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            onPress={() => setGender('male')}
          >
            <Text style={styles.genderButtonText}>Laki-laki</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            onPress={() => setGender('female')}
          >
            <Text style={styles.genderButtonText}>Perempuan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Umur"
          value={age}
          onChangeText={setAge}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputField}
          placeholder="No. Handphone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={dataSaved} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.successTitle}>Data Anda Disimpan</Text>
            <Text style={styles.successDescription}>Perubahan profil Anda telah berhasil disimpan.</Text>
            <TouchableOpacity style={styles.greenButton} onPress={() => navigation.goBack()}>
              <Text style={styles.greenButtonText}>Tutup</Text>
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
  inputBox: {
    marginBottom: 20,
    backgroundColor: '#F0EFEF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
  },
  inputField: {
    fontSize: 16,
    color: '#333',
  },
  genderOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    backgroundColor: '#F0EFEF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#4CAF50',
  },
  genderButtonText: {
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    width: '80%',
    marginLeft: 35,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
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
    width: '70%',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  successDescription: {
    fontSize: 14,
    textAlign: 'center',
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

export default EditProfile;

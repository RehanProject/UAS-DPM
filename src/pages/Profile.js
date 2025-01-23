import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [userData, setUserData] = useState({
    userName: 'Rosni Dwita',
  });

 
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData({
            userName: parsedData.username,
          });
        }
      } catch (error) {
        console.log('Error loading user data', error);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = () => {
   
    navigation.navigate('LoginScreen');
    setIsModalVisible(false); 
  };

  return (
    <ScrollView style={styles.container}>
      {/* Foto Profil */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/icons/profil.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userData.userName}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditProfile', { userData })} 
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Artikel Disimpan */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => console.log("Navigating to Saved Articles")}>
          <Image
            source={require('../assets/icons/love.png')} 
            style={styles.icon}
          />
          <Text style={styles.itemText}>Artikel Disimpan</Text>
          <Image
            source={require('../assets/icons/panahkesamping.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* FAQs Konsultasi */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => console.log("Navigating to FAQs")}>
          <Image
            source={require('../assets/icons/faqs.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>FAQs</Text>
          <Image
            source={require('../assets/icons/panahkesamping.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Keluar Button */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => setIsModalVisible(true)}>
          <Image
            source={require('../assets/icons/keluar.png')}
            style={styles.icon}
          />
          <Text style={styles.itemText}>Keluar</Text>
          <Image
            source={require('../assets/icons/panahkesamping.png')} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)} 
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Keluar</Text>
            <Text style={styles.modalDescription}>Apakah Anda yakin ingin keluar?</Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsModalVisible(false)} 
              >
                <Text style={styles.cancelButtonText}>Batal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.logoutButtonText}>Ya, Keluar</Text>
              </TouchableOpacity>
            </View>
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
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#00A859',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F6F6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#777',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;

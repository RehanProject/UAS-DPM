import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Chat = ({ navigation }) => {
  const [timeLeft, setTimeLeft] = useState(32 * 60 + 50); // Menggunakan detik untuk menyimpan waktu (32 menit 50 detik)
  
  // Fungsi untuk memformat waktu dalam format mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    // Set interval untuk mengupdate waktu setiap detik
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval); // Hentikan interval jika waktu habis
          return 0;
        }
      });
    }, 1000);

    // Bersihkan interval saat komponen dibersihkan
    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk navigasi ke halaman Chat2
  const navigateToChat2 = () => {
    navigation.navigate('Chat2');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Chat Saya</Text>

      {/* Dokter 1 (Online) */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../assets/icons/rishi.png')} // Ganti dengan gambar dokter yang sesuai
              style={styles.avatar}
            />
            <View style={styles.statusIcon}>
              <View style={styles.onlineCircle} />
            </View>
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Rishi</Text>
            <Text style={styles.timeLabel}>Sisa Waktu</Text>
            <Text style={styles.time}>{formatTime(timeLeft)}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Dokter 2 */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <Image
            source={require('../assets/icons/vana.png')} // Ganti dengan gambar dokter yang sesuai
            style={styles.avatar}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Vana</Text>
            <Text style={styles.sessionEnded}>Sesi Berakhir</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Dokter 3 */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <Image
            source={require('../assets/icons/arashi.png')} // Ganti dengan gambar dokter yang sesuai
            style={styles.avatar}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Arasi</Text>
            <Text style={styles.sessionEnded}>Sesi Berakhir</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Dokter 4 */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <Image
            source={require('../assets/icons/ranti.png')} // Ganti dengan gambar dokter yang sesuai
            style={styles.avatar}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Ranti</Text>
            <Text style={styles.sessionEnded}>Sesi Berakhir</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Dokter 5 */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <Image
            source={require('../assets/icons/vana.png')} // Ganti dengan gambar dokter yang sesuai
            style={styles.avatar}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Dodi</Text>
            <Text style={styles.sessionEnded}>Sesi Berakhir</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Dokter 6 */}
      <TouchableOpacity onPress={navigateToChat2} style={styles.chatBox}>
        <View style={styles.infoBox}>
          <Image
            source={require('../assets/icons/tirta.png')} // Ganti dengan gambar dokter yang sesuai
            style={styles.avatar}
          />
          <View style={styles.infoTextContainer}>
            <Text style={styles.doctorName}>Dr. Tirta</Text>
            <Text style={styles.sessionEnded}>Sesi Berakhir</Text>
          </View>
        </View>
      </TouchableOpacity>
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
  chatBox: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F5F6F6',
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  statusIcon: {
    position: 'absolute',
    top: 30,
    bottom: 20,
    marginLeft: 259,
  },
  onlineCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'white',
  },
  infoTextContainer: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timeLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: -20,
    marginLeft: 200,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00A859',
    marginLeft: 210,
  },
  sessionEnded: {
    fontSize: 12,
    color: '#FF5722',
    top: -10,
    bottom: 20,
    marginLeft: 200,
  },
});

export default Chat;

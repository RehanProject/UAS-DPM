import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const Chat2 = ({ navigation }) => {
  const [messages, setMessages] = useState([]); // State untuk menyimpan pesan
  const [inputText, setInputText] = useState(''); // State untuk input pengguna
  const [autoReplyIndex, setAutoReplyIndex] = useState(0); // State untuk melacak urutan balasan otomatis
  const [timeLeft, setTimeLeft] = useState(32 * 60 + 50); // State untuk menyimpan waktu tersisa dalam detik

  // Array balasan otomatis
  const autoReplies = [
    { text: 'Halo, ada yang bisa saya bantu?', sender: 'bot' },
    { text: 'Apakah Anda punya riwayat alergi atau penyakit tertentu?', sender: 'bot' },
    { text: 'Baik, itu akan saya catat untuk pemeriksaan lebih lanjut', sender: 'bot' },
  ];

  useEffect(() => {
    // Interval untuk mengupdate waktu setiap detik
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(timer);
  }, []);

  // Format waktu dalam detik menjadi mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { text: inputText, sender: 'user' }; // Pesan dari pengguna
      setMessages([...messages, newMessage]); // Menambahkan pesan pengguna
      setInputText(''); // Reset input setelah mengirim pesan

      // Kirim balasan otomatis jika ada balasan yang tersedia
      if (autoReplyIndex < autoReplies.length) {
        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, autoReplies[autoReplyIndex]]);
          setAutoReplyIndex(autoReplyIndex + 1); // Update index untuk balasan berikutnya
        }, 1000); // Setiap balasan muncul setelah 1 detik
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerDoctorName}>Dr. Rishi</Text>
          <Text style={styles.headerStatus}>Online</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.timeLabel}>Sisa Waktu</Text>
          <Text style={styles.time}>{formatTime(timeLeft)}</Text>
        </View>
      </View>

      {/* Chat Background Section */}
      <View style={styles.chatBoxContainer}>
        {/* Chat messages */}
        <View style={styles.messageContainer}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={message.sender === 'user' ? styles.greenBox : styles.whiteBox}>
              <Text style={message.sender === 'user' ? styles.greenText : styles.whiteText}>
                {message.text}
              </Text>
            </View>
          ))}
        </View>

        {/* Message Input Section */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWithIcons}>
            <TextInput
              style={styles.inputField}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Ketik pesan..."
              placeholderTextColor="#777"
            />
            <TouchableOpacity onPress={handleSendMessage} style={styles.icon}>
              <Image source={require('../assets/icons/send.png')} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
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
    top: 30,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginTop: 30,
    tintColor: '#000',
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerLeft: {
    alignItems: 'center',
  },
  headerRight: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  headerDoctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 120,
    marginLeft: 120,
  },
  headerStatus: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
    marginLeft: 120,
  },
  timeLabel: {
    fontSize: 12,
    color: '#777',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00A859',
  },
  chatBoxContainer: {
    backgroundColor: '#CECEDC',
    flex: 1,
    paddingBottom: 80,
  },
  messageContainer: {
    marginBottom: 20,
    padding: 15,
  },
  greenBox: {
    backgroundColor: '#00A859',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  greenText: {
    color: '#fff',
    fontSize: 14,
  },
  whiteBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  whiteText: {
    color: '#333',
    fontSize: 14,
  },
  inputContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CECEDC',
    backgroundColor: '#CECEDC',
    marginBottom: 70,
    marginTop: 160,
  },
  inputWithIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  inputField: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
});

export default Chat2;

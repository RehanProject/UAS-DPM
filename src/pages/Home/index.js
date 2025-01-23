import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.page}> 
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#6EDC6E', // Pastikan tanda sama dengan (=) ada
    }
});

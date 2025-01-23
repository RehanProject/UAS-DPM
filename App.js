import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';

// Import screens
import WelcomeScreen from './src/pages/WelcomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import HomeScreen from './src/pages/HomeScreen';
import PharmacyScreen from './src/pages/PharmacyScreen';
import Cart from './src/pages/Cart'; 
import DetailScreen from './src/pages/DetailScreen'; 
import LocationDetailScreen from './src/pages/LocationDetailScreen';
import LocationDetailScreen2 from './src/pages/LocationDetailScreen2';
import HospitalScreen from './src/pages/HospitalScreen';
import LocationDetailScreen3 from './src/pages/LocationDetailScreen3';
import DetailAmbulance from './src/pages/DetailAmbulance';
import DetailDokter from './src/pages/DetailDokter';
import DetailDokter2 from './src/pages/DetailDokter2';
import Layanan from './src/pages/Layanan';
import Chat from './src/pages/Chat';  
import Chat2 from './src/pages/Chat2';
import Profile from './src/pages/Profile';  
import EditProfile from './src/pages/EditProfile';
import Cart2 from './src/pages/Cart2';
import Cart3 from './src/pages/Cart3';
import Cart4 from './src/pages/Cart4';
import Cart5 from './src/pages/Cart5';

// Tab Navigator for HomeScreen
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#F8F8F8',
          height: 70,
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          paddingBottom: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('./src/assets/icons/icon-homescreen.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? '#00FF00' : '#777',
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? '#00FF00' : '#777' }}>
              Home
            </Text>
          ),
        }}
      />

      {/* Keranjang Tab */}
      <Tab.Screen
        name="Keranjang"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('./src/assets/icons/icon-keranjang.png')}
                style={{
                  width: 45,
                  height: 45,
                  tintColor: focused ? '#00FF00' : '#777',
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? '#00FF00' : '#777' }}>
              Keranjang
            </Text>
          ),
        }}
      />

      {/* Layanan Tab */}
      <Tab.Screen
        name="Layanan"
        component={Layanan}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('./src/assets/icons/icon-ambulance.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#00FF00' : '#777',
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? '#00FF00' : '#777' }}>
              Layanan
            </Text>
          ),
        }}
      />

      {/* Konsul Tab */}
      <Tab.Screen
        name="Konsul"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('./src/assets/icons/icon-konsul.png')}
                style={{
                  width: 20,
                  height: 21,
                  tintColor: focused ? '#00FF00' : '#777',
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? '#00FF00' : '#777' }}>
              Konsul
            </Text>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('./src/assets/icons/icon-profil.png')}
                style={{
                  width: 15,
                  height: 20,
                  tintColor: focused ? '#00FF00' : '#777',
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ fontSize: 12, color: focused ? '#00FF00' : '#777' }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationDetailScreen"
        component={LocationDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationDetailScreen2"
        component={LocationDetailScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hospital"
        component={HospitalScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationDetailScreen3"
        component={LocationDetailScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailAmbulance"
        component={DetailAmbulance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailDokter"
        component={DetailDokter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailDokter2"
        component={DetailDokter2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat2"
        component={Chat2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart2"
        component={Cart2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart3"
        component={Cart3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart4"
        component={Cart4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart5"
        component={Cart5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pharmacy"
        component={PharmacyScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

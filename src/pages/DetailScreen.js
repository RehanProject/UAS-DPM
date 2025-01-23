import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const DetailScreen = ({ navigation }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const panadol = {
    id: '1',
    name: 'Panadol',
    price: 'Rp 25.000',
    image: require('../assets/icons/panadol.png'),
    quantity: '25pcs',
    description:
      'OBH COMBI adalah obat batuk yang mengandung Paracetamol, Ephedrine HCl, dan Chlorphenamine maleate yang digunakan untuk meredakan batuk disertai gejala flu seperti demam, sakit kepala, dan bersin-bersin...',
    fullDescription:
      'OBH COMBI adalah obat batuk yang mengandung Paracetamol, Ephedrine HCl, dan Chlorphenamine maleate yang digunakan untuk meredakan batuk disertai gejala flu seperti demam, sakit kepala, dan bersin-bersin. Obat ini juga membantu meredakan hidung tersumbat dan bersin-bersin akibat flu. Dosis dan cara pemakaian sesuai petunjuk dokter atau apoteker.',
  };

  // Function to handle quantity change
  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Increment quantity
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity if greater than 1
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Product Details */}
      <View style={styles.header}>
        <Text style={styles.title}>Detail Obat</Text>
        <Image source={panadol.image} style={styles.detailImage} />

        {/* Product Information */}
        <View style={styles.productInfo}>
          <View style={styles.leftColumn}>
            <Text style={styles.productName}>{panadol.name}</Text>
            <Text style={styles.productQuantity}>{panadol.quantity}</Text>
            <View style={styles.ratingContainer}>
              {/* Updated to use custom star image */}
              <Image 
                source={require('../assets/icons/bintang.png')} 
                style={styles.star} // Custom star image style
              />
              <Image 
                source={require('../assets/icons/bintang.png')} 
                style={styles.star} 
              />
              <Image 
                source={require('../assets/icons/bintang.png')} 
                style={styles.star} 
              />
              <Image 
                source={require('../assets/icons/bintang.png')} 
                style={styles.star} 
              />
              {/* Rating Number */}
              <Text style={styles.ratingNumber}>4.0</Text>
            </View>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.minusButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.plusButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.productPrice}>{panadol.price}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.descriptionTitle}>Deskripsi</Text>
        <Text style={styles.productDescription}>
          {showFullDescription ? panadol.fullDescription : `${panadol.description}... `}
          <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
            <Text style={styles.readMoreText}>
              {showFullDescription ? 'Perkecil' : 'Lihat semua'}
            </Text>
          </TouchableOpacity>
        </Text>

         {/* Action Buttons */}
         <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => navigation.navigate('LocationDetailScreen')} 
          >
            <Text style={styles.buyButtonText}>Beli</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Image source={require('../assets/icons/icon-keranjang.png')} style={styles.cartIcon} />
          </TouchableOpacity>
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
    top: 40,
    zIndex: 1,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginTop: 25,
    tintColor: '#000',
  },
  header: {
    marginTop: 120,
    marginBottom: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detailImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  productInfo: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 12,
  },
  productQuantity: {
    fontSize: 16,
    color: '#777',
    marginLeft: 12,
  },
  ratingContainer: {
    flexDirection: 'row', 
    marginVertical: 5,
  },
  star: {
    width: 23, 
    height: 20, 
    marginLeft: 12, 
  },
  ratingNumber: {
    fontSize: 16, 
    color: 'green', 
    marginLeft: 5, 
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  minusButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderRadius: 5,
  },
  plusButton: {
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 12,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  productPrice: {
    fontSize: 20,
    color: '#00FF00',
    marginRight: 12,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start', 
    marginLeft: 12, 
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
    marginLeft: 8,
  },
  readMoreText: {
    fontSize: 16,
    color: 'blue', 
    textDecorationLine: 'underline', 
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  cartIcon: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },
});

export default DetailScreen;

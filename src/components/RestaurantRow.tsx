import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stars } from 'components/Stars';

export const RestaurantRow = ({ place, index }: { place: any; index: number }) => {  
  const navigation = useNavigation();

  const infoPressed = () => {
    navigation.navigate('Info', { place });
  };

  return (
    <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
      <View style={[styles.row]}>
        <View style={styles.starts}>
          <Stars rating={place.rating} />
        </View>

        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.addressText}>{place.address}</Text>
        </View>

        <View style={styles.edges}>
          {/* <Button title="Info" color="#C93F0B" accessibilityLabel="Info" onPress={infoPressed} /> */}

          {/* <TouchableOpacity style={styles.button} onPress={infoPressed}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity> */}
          {/* 
          <TouchableWithoutFeedback style={styles.button} onPress={infoPressed}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableWithoutFeedback> */}

          <TouchableHighlight style={styles.button} underlayColor="#5398DC" onPress={infoPressed}>
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>

      {/* {showInfo && (
        <View style={styles.info}>
          <Text>Restaurant Info</Text>
          <Image
            source={{ uri: `http://192.168.0.63:3000/images/${place.image}` }}
            style={{
              flex: 1,
              height: 100,
            }}
            resizeMode="contain"
          />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    minWidth: 50,
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  addressText: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
  // info: {
  //   marginHorizontal: 40,
  //   marginVertical: 10,
  //   padding: 10,
  //   backgroundColor: '#fff',
  //   borderWidth: 0.4,
  //   borderColor: '#ddd',
  //   borderRadius: 8,
  // },
  starts: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    minWidth: 50,
  },
});

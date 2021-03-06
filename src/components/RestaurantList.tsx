import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, TextInput, FlatList, Image } from 'react-native';
import { Header } from './Header';
import { RestaurantRow } from './RestaurantRow';
import PizzaImage from 'images/pizza.png';

export const RestaurantList = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://192.168.0.63:3000/restaurants').then((result) => setRestaurants(result.data));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Image source={PizzaImage} />
      </View>

      <Header />

      <TextInput
        style={styles.input}
        placeholder="Live Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />

      <FlatList
        data={restaurants.filter((x) => !search || x.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)}
        renderItem={({ item, index }) => <RestaurantRow place={item} index={index} />}
        keyExtractor={(item) => item.name}
        initialNumToRender={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

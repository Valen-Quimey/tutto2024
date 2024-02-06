import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Image, Text, View, StyleSheet } from 'react-native';
import RemoveModal from './src/components/RemoveModal';
import Input from './src/components/Input';
import Lista from './src/components/Lista';
import AddItem from './src/components/AddItem';

const DATA = [
  {
    name: 'Guiso con lentejas',
    id: 1,
  },
  {
    name: 'Canelones',
    id: 2,
  },
  {
    name: 'Tarta de verdura',
    id: 3,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal modalVisible={modalVisible} setModalVisible={setModalVisible} removeItem={removeItem} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center' }}>
        <Text>CARRITO</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://w7.pngwing.com/pngs/652/688/png-transparent-computer-icons-online-shopping-e-commerce-shopping-cart-shopping-cart-angle-black-3dcart.png' }}
        />
      </View>
      <Input handleInputChange={handleInputChange} inputValue={inputValue} addItem={addItem} />
      <Lista cartItems={cartItems} handleModal={handleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FD8D14',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight,
  },
});

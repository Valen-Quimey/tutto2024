import React from 'react';
import { FlatList, Text, View, Pressable, StyleSheet } from 'react-native';

const Lista = ({ cartItems, handleModal }) => {
  return (
    <View style={styles.productList}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={{ width: 400, flexDirection: 'row' }}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item.id)}>
              <Text style={{ fontSize: 20 }}>🗑</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
  },
});

export default Lista;

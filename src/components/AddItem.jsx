import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const AddItem = () => {
  return (
    <TouchableOpacity onPress={addItem}>
      <Text style={{ fontSize: 40 }}>+</Text>
    </TouchableOpacity>
  );
};

export default AddItem;



import React from 'react';
import { Modal, Text, View, Pressable, StyleSheet } from 'react-native';

const RemoveModal = ({ modalVisible, setModalVisible, removeItem }) => {
  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text>¿Querés eliminar el producto?</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={[styles.buttonText, styles.buttonNo]}>No</Text>
          </Pressable>
          <Pressable onPress={removeItem}>
            <Text style={[styles.buttonText, styles.buttonYes]}>Sí</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    backgroundColor: '#FFE17B',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Para centrar los botones horizontalmente
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonNo: {
    marginRight: 20, // Agrega margen a la derecha del botón "No"
  },
  buttonYes: {
    marginLeft: 20, // Agrega margen a la izquierda del botón "Sí"
  },
});

export default RemoveModal;

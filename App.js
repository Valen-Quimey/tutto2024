import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Usuario from './src/components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {{ flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems:'center'}}>
        <Text>CARRITO</Text>
        <Image style= {{width: 50, height:50}} source= {{uri:"https://w7.pngwing.com/pngs/652/688/png-transparent-computer-icons-online-shopping-e-commerce-shopping-cart-shopping-cart-angle-black-3dcart.png"}}/>
      </View>
      <View style={ {flexDirection: 'row'}}>
        <TextInput style= {styles.input} placeholder='Ingrese un menú'/>
        <TouchableOpacity>
          <Text style= {{ fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productList}>
        <Text style={styles.product }>Milanesa con papas fritas</Text>
        <Text style={styles.product }>Pollo con fideos tirabuzón</Text>
        <Text style={styles.product }>Ensalada completa</Text>
        <Text style={styles.product }>Coca Cola 2.25l</Text>
        <Text style={styles.product }>Coca Cola Zero 2.25l</Text>
        <Text style={styles.product }>Sprite 2.25l</Text>
        <Text style={styles.product }>Asado</Text>
        <Text style={styles.product }>Bolsa de carbón</Text>
        <Text style={styles.product }>Postre</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#FD8D14', flex: 1, paddingHorizontal:10,
  },

  input:  {
    borderColor: 'gray', borderWidth: 1, paddingVertical:10, paddingHorizontal:20, borderRadius: 5, width:'90%',
  },

  productList: {
    justifyContent: 'center', alignItems: 'center', paddingVertical:10,
  },

  product: {
    fontSize: 16, fontWeight:'bold', padding: 4,
  },

});
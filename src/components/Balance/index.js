import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function App() {
  return (
    <View>
        <ImageBackground source={require('../../../assets/card.png')} style={styles.saldoContainer}>
            <View>
                <Text style={styles.saldo}>Saldo atual</Text>
                <Text style={styles.saldoBalance}>R$ 23.204,30</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9}>   
                <Feather name="plus" size={27} color="#000000" style={styles.buttonAdd}></Feather>
            </TouchableOpacity>
        </ImageBackground>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
  },
  saldoContainer: {
    height: 100,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 2
  },
  saldo: {
    marginTop: 24,
    marginLeft: 45,
    fontSize: 11,
    color: "#D4D4D4"
  },
  saldoBalance: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 4,
    marginLeft: 45,
    color: "#FFF"
  }, 
  buttonAdd: {
    marginTop: 27,
    marginRight: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 44/2
  }
});

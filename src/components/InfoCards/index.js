import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function InfoCards() {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} style={styles.cardSend}>
            <Feather name="send" size={27} color="#FFF"></Feather>
            <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.cardCredit}>
            <Feather name="credit-card" size={27} color="#FFF"></Feather>
            <Text style={styles.text}>Cartões</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.cardMais}>
            <Feather name="grid" size={27} color="#FFF"></Feather>
            <Text style={styles.text}>Mais</Text>
        </TouchableOpacity>
    </View>  
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        width: 339,
        height: 100
    },
    text: {
        fontSize: 12,
        color: "#FFF",
        marginTop: 5
    },
    cardSend: {
        marginLeft: 25,
        width: 87,
        height: 120,
        backgroundColor: '#0A5AD1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    cardCredit: {
        marginLeft: 25,
        width: 87,
        height: 120, 
        backgroundColor: '#9B18EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    cardMais: {
        marginLeft: 25,
        width: 87,
        height: 120,
        backgroundColor: '#FA871D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})

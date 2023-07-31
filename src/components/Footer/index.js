import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {Feather, Ionicons} from '@expo/vector-icons'

export default function Footer({ page }) {
  return (
    <View style={styles.container}>
        <View style={styles.active}>
            <TouchableOpacity><Feather name="home" size={27} color={page === "Home" ? "#FFF" : "#000000"} style={styles.icons}></Feather></TouchableOpacity>
        </View>
        <TouchableOpacity><Feather name="settings" size={27} color={page === "Config" ? "#FFF" : "#000000"} style={styles.icons}></Feather></TouchableOpacity>
        <View style={styles.destaque}>
            <TouchableOpacity><Feather name="shopping-cart" size={27} color={page === "Comprar" ? "#FFF" : "#000000"} style={styles.icons}></Feather></TouchableOpacity>
        </View>
        <TouchableOpacity><Feather name="heart" size={27} color={page === "Donate" ? "#FFF" : "#000000"} style={styles.icons}></Feather></TouchableOpacity>
        <TouchableOpacity><Feather name="user" size={27} color={page === "User" ? "#FFF" : "#000000"} style={styles.icons}></Feather></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 50,
        backgroundColor: '#787878',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3
    },
    active: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconSelect: {
        marginLeft: 40
    },
    icons: {
        marginLeft: 40
    }
})

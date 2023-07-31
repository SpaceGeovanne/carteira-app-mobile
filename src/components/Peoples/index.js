import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function Peoples() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="search" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Pesquisar</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Lucais</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Pedro</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>João Lucas</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Andressa</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Maria</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Laura</Text>
        </View>
        <View style={styles.people}>
            <TouchableOpacity activeOpacity={0.9} style={styles.card}>  
                <Feather name="user" size={27} color="#000000" style={styles.icon}></Feather>
            </TouchableOpacity>
            
            <Text style={styles.text}>Roberto</Text>
        </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 130,

    },  
    people: {
        marginTop: 40,
        width: 80,
        height: 80,
        alignItems: 'center',
    },
    card: {
        marginLeft: 26,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 50
    }, 
    text: {
        marginTop: 10,
        fontSize: 9,
        color: '#FFFFFF',
        marginLeft: 24
    }
})

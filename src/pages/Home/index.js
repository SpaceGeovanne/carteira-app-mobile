import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import InfoCards from '../../components/InfoCards'
import Peoples from '../../components/Peoples'
import Movimento from '../../components/Movimento'
import Footer from '../../components/Footer'

const lastMoviments = [
    {
        id: 1,
        name: "Pagamento Boleto de Luz",
        value: "83,90",
        date: "Hoje",
        type: 0, //0 = SAIDA, 1 = ENTRADA
    },
    {
        id: 2,
        name: "PIX recebido de Alessandra",
        value: "1.000,00",
        date: "Hoje",
        type: 1, //0 = SAIDA, 1 = ENTRADA
    },
    {
        id: 3,
        name: "Pagamento Mensal - Netflix",
        value: "39,90",
        date: "Hoje",
        type: 0, //0 = SAIDA, 1 = ENTRADA
    }
]

export default function App() {
    return (
        <View style={styles.container}>
            <Header user="SpaceGeovanne" />
            <Balance />
            <InfoCards />
            <Peoples />
            <View style={styles.movements}>
                <Text style={styles.activitiesTitle}>Atividades recentes</Text>
                <TouchableOpacity activeOpacity={0.9}>
                    <Text style={styles.activitiesMore}>Ver tudo</Text>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.list} 
            data={lastMoviments} keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false} renderItem={({ item }) => <Movimento data={item}/>}/>

            <Footer page="Home"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D1D'
    },
    movements: {
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        marginBottom: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    activitiesTitle: {
        marginLeft: 18,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFF"
    },
    activitiesMore: {
        marginTop: 5,
        fontSize: 13,
        color: '#686868'
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }

});

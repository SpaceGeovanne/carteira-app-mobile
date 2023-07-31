import { StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function Movimento({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>
          <Feather name={data.type === 1 ? "log-in" : "credit-card"} size={25} color="#000000" style={styles.iconImage}></Feather>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>
      </View>
      <View>
        <Text style={data.type === 1 ? styles.recived : styles.expenses}>R$ {data.type === 0 ? "-" : ""}{data.value}</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    marginTop: 7,
    marginLeft: 14,
    flexDirection: 'row'
  },
  icon: {
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50
  },
  iconImage: {
  },
  details: {
    marginTop: 14,
    marginLeft: 10
  },
  name: {
    color: '#FFF'
  },
  date: {
    color: '#ADACAC',
    fontSize: 11
  },
  recived: {
    marginTop: 10,
    color: '#0BDE20',
    fontWeight: 'bold'
  },
  expenses: {
    marginTop: 10,
    color: '#E02323',
    fontWeight: 'bold'
  }
})

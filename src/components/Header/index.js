import { StyleSheet, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.text}>Olá, {user}.</Text>
        <Text style={styles.welcome}>Bem vindo novamente!</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9}>
        <Feather name="bell" size={25} color="#FFF" style={styles.buttonNotify}></Feather>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 11,
    color: "#FFF",
  },
  welcome: {
    fontSize: 11,
    color: "#FFF",
    fontWeight: 'bold'
  },
  buttonNotify: {
    paddingRight: 25
  }
});

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={estilos.Container}>
      <Text>E aeeeeee galeraaaa. Eu to aki</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View>
      <Text style={styles.Container}>E aeeeeee galeraaaa</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;

*/

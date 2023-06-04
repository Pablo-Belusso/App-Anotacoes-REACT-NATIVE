import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState(
    'Antes de mergulharmos em como usar useState dentro de useEffect, é importante entender a diferença entre estado e props no React.',
  );

  if (estado == 'leitura') {
    // Página Inicial
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        <View style={estilos.header}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
            Aplicativo Anotação
          </Text>
        </View>

        <View style={{padding: 20}}>
          <Text style={estilos.anotacao}>{anotacao}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setarEstado('atualizando')} // vai para página de Salvar
          style={estilos.btnAnotacao}>
          <Text style={estilos.btnAnotacaotexto}>+</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (estado == 'atualizando') {
    // Página Salvar
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />

        <View style={estilos.header}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 25}}>
            Aplicativo Anotação
          </Text>
        </View>

        <TextInput
          onChangeText={text => setarAnotacao(text)} // permite alterar o texto
          style={{padding: 15, height: 300, textAlignVertical: 'top'}} // tamanho do texto na tela
          multiline={true}
          numberOfLines={5}
          value={anotacao}></TextInput>

        <TouchableOpacity
          onPress={() => setarEstado('leitura')} // volta para a página inicial
          style={estilos.btnAnotacao}>
          <Text style={estilos.btnSalvartexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#069',
  },
  anotacao: {
    fontSize: 18,
    color: 'black',
  },
  btnAnotacao: {
    width: 80,
    height: 80,
    backgroundColor: '#069',
    borderRadius: 40,
    right: 20,
    bottom: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAnotacaotexto: {
    color: 'white',
    fontSize: 35,
    fontWeight: '400',
  },
  btnSalvartexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});

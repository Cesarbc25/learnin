import React, { useState } from 'react';
import { Container, Modal, Image, Text, Button, SafeAreaView, TextInput, View, StyleSheet, ScrollView, Pressable, Alert, FlatList, InteractionManager } from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackView, createStackNavigator } from '@react-navigation/stack';

import Formulario from '../components/Formulario'
import Vocab from './Word';

const Verbs = ({ item}) => {

  const navigation = useNavigation();

  const { word, wordES } = item

    // Objeto
    const newVerb = {
      id: Date.now(),
      verb,
      words,
      wordES,
      category,

  }

  return (
    <View>
        <ScrollView>
      
        <Text>Verbs</Text>

{/* // ITERAR LO DE BASE DE DATOS */}
        {/* <Text>{word}</Text>
        <Text>{wordES}</Text> */}

        <Button 
          text="Word"
          onPress={ () => {
            navigation.navigate('Word')
          }}
        />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#98ceca',
    flex: 1
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF'
  },
  tituloBold: {
    fontWeight: '900'
  },
  btnCancel: {
    backgroundColor: '#000',
    marginVertical: 20,
    marginHorizontal: 70,
    padding: 10,
    borderRadius: 10,
  },
  btnCancelTxt: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10
  },
  label: {
    color: '#FFF',
    marginBottom: 10, 
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  fechaSContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 20
  },
  btnNuevo: {
    marginVertical: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 5
  },
  btnNuevoTxt: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})

export default Verbs;

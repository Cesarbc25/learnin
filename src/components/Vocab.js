import React, { useState } from 'react';
import { Container, Modal, Image, Text, Button, SafeAreaView, TextInput, View, StyleSheet, ScrollView, Pressable, Alert, FlatList, InteractionManager } from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackView, createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'

import Formulario from '../components/Formulario'
import Word from '../components/Word';
import Home from '../components/Home';

const Vocab = (word, setWord) => {
  
  const navigation = useNavigation();

  // const [words, setWords] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [words, setWords] = useState([])
  const [verb, setVerb] = useState([])

  return (

    <View>
        <Pressable
        style={styles.btnAdd}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text
          style={styles.btnAddText}
        >Add</Text>
      </Pressable>
    
      {words.length === 0 ? 
          <Text style={styles.noWords}>Don't have words</Text> :
          <FlatList
            style={styles.list}
            data={words}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <Word
                  item={item}
                />
              )
            }}
            
          />
      }
      <Formulario
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        words={words}
        setWords={setWords}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20
  },
  label: {
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10
  },
  texto: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
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
  btnAdd: {
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 130,
    padding: 1,
    borderRadius: 5,
  },
  btnAddText: {
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#000'
  },
  noWords: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24, 
    fontWeight: '600'
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30
  }

});

   
export default Vocab;

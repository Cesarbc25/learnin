import React, { useState } from 'react';
import { Container, Modal, Image, Text, Button, SafeAreaView, TextInput, View, StyleSheet, ScrollView, Pressable, Alert, FlatList, InteractionManager } from 'react-native'

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackView, createStackNavigator } from '@react-navigation/stack';

import Formulario from '../components/Formulario'
import Word from '../components/Word';
import Vocab from '../components/Vocab';
import Reminder from './Reminder';

const Home = () => {

const navigation = useNavigation();

  // SHOW MODAL FORMULARIO
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleRemind, setModalVisibleRemind] = useState(false)
  const [modalVisibleWords, setModalVisibleWords] = useState(false)

  const [words, setWords] = useState([])
  const [verb, setVerb] = useState([])

  // const navigation = useNavigation();

  
  const closeModalRemind = () => {
    setModalVisibleRemind(false)
  }

  setTimeout(() => {
    setModalVisible(false)
  }, 100000);

  setTimeout(() => {
    setModalVisibleWords(false)
  }, 100000);

  setTimeout(() => {
    setModalVisibleRemind(false)
  }, 100000);

//   const { word, wordES } = item

//     // Objeto
//     const newVerb = {
//       id: Date.now(),
//       verb,
//       words,
//       wordES,
//       category,

//   }

  return (
    <View>
        {/* <ScrollView> */}
        <Text style={styles.titulo}>Category {''}
        {/* <Text style={styles.tituloBold}>Veterinaria</Text> */}
      </Text>
    

      {/* <Pressable
        style={styles.btnPhrsal}
      > */}
      <Pressable
        style={styles.btnPhrsal}
        onPress={ () => {
          navigation.navigate("Vocab")
        }}
      >
        <Text
          style={styles.btnTextPhrsal}
        >Verbs
        </Text>
      </Pressable>

      <Pressable
          style={styles.btnReminder} 

          onPress={() => setModalVisibleRemind(!modalVisibleRemind)}
      >
        <Text
            style={styles.btnTextReminder}
          >Reminder
          </Text>
      </Pressable>
      {/* </Pressable> */}
    
      {/* {words.length === 0 ? 
          <Text style={styles.noWords}>No hay pacientes aún</Text> :
          <FlatList
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
      } */}
    
      <Formulario
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        words={words}
        setWords={setWords}
      />
      
      <Reminder
        modalVisibleRemind={modalVisibleRemind} 
        setModalVisibleRemind={setModalVisibleRemind}
      />

      {/* <Vocab
        modalVisibleWords={modalVisibleWords} 
        setModalVisibleWords={setModalVisibleWords}
        words={words}
        setWords={setWords}
      /> */}
{/* 
      <Modal
        visible={modalVisibleWords}
        animationType='slide'
      >
      </Modal> */}

    {/* // ITERAR LO DE BASE DE DATOS */}
        {/* <Text>{word}</Text>
        <Text>{wordES}</Text> */}

        {/* <Button 
          text="Word"
          onPress={ () => {
            navigation.navigate('Word')
          }}
    /> */}
      {/* </ScrollView> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#98ceca',
    flex: 7
  },
  app:{
    textAlign: 'center',
    fontSize: 50,
    color: '#98ceca',
    fontWeight: '800',
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    color: '#374151',
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 30
  },
  tituloBold: {

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
  btnPhrsal: {
    backgroundColor: '#98ceca',
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  btnTextPhrsal: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noWords: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24, 
    fontWeight: '600'
  },
  btnTextReminder: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'

  },
  btnReminder: {
    backgroundColor: '#98ceca',
    padding: 15,
    marginTop: 300,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 300  
  }

});

export default Home;

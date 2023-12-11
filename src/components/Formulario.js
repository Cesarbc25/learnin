import React, { useState, useEffect } from 'react';
import { Modal, Image, Text, Button, SafeAreaView, TextInput, View, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

import Word from './Word';
import Reminder from '../components/Reminder';

// DISTRUCTURING WORDOBJ
const formulario = ({  modalVisible, closeModal, words, setWords, word: wordObj, setWord: setWordVocab}) => {

  const [id, setId] = React.useState('')
  const [word, setWord] = React.useState('')
  const [traduction, setTraduction] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [definition, setDefinition] = React.useState('')
  const [example, setExample] = React.useState('')
  const [image, setImage] = React.useState('')

  wordObj = {}

  useEffect(() => {

    if(Object.keys(wordObj) .length > 0) {
      // console.log('Si hay allgo')
      setId(wordObj.id)
      setWord(wordObj.word)
      setTraduction(wordObj.traduction)
      setCategory(wordObj.category)
      setDefinition(wordObj.definition)
      setExample(wordObj.example)
      setImage(wordObj.image)

    } 

  }, [wordObj])
  

  // const pickImage = async () => {
  //     // No permissions request is necessary for launching the image library
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     console.log(result);

  //     if (!result.canceled) {
  //       setImage(result.assets[0].uri);
  //     }
  //   }
      

  // const handleCameraClick  = () => {
  //     ImagePicker.openCropper({
  //     mediaTypes: ImagePicker.openPicker.Images,
  //     path: 'my-file-path.jpg',
  //     width: 300,
  //     height: 400
  //   }).then(image => {
  //     console.log(image);
  //   })
  // }

  const handleWord = () => {
    // Validar
    if([word, traduction, category].includes('')){
      // Mensajes / botones
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
        //[{text: 'Cancelar'}, {text: 'OK'} ]
      )
      return
    }

    // Objeto
    const newWord = {
      word,
      traduction,
      category,
      definition,
      example, 
      image
    }

    if(id) {
        // Editing
      newWord.id = id

      const wordUpdated = words.map( wordState =>
        wordState.id === newWord.id ? newWord :
        wordState ) // Move and verify 
        setWords(wordUpdated)
        setWordVocab({})

        
    } else {
        // New registration
      newWord.id = Date.now()  
      console.log(newWord.id)
      setWords([...words, newWord]) 
    }


      // Tomar lo del state y agregarlo

    closeModal()
    setId('')
    setWord('')
    setTraduction('')
    setCategory('')
    setDefinition('')
    setExample('')
    setImage('')

  }


  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text
            style={styles.titulo}
          > {''}
            <Text style={styles.tituloBold}>Nueva palabra
            </Text>
          </Text>

          <Pressable 
            style={ styles.btnCancel }
            onPress={ () => {
             closeModal()
              setWordVocab({})
              setId('')
              setWord('')
              setTraduction('')
              setCategory('')
              setDefinition('')
              setExample('')
              setImage('')
          
              }}
          >
            <Text style={ styles.btnCancelTxt }> Cancel X </Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Word...</Text>
            <TextInput
              style={styles.input}
              placeholder='New word(s)'
              placeholderTextColor={'#666'}
              value={word}
              onChangeText={setWord}
            />
            <Text style={styles.label}>Traduction</Text>
            <TextInput
              style={styles.input}
              placeholder='Word Spanish'
              placeholderTextColor={'#666'}
              value={traduction}
              onChangeText={setTraduction}
            />
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder='Category'
              placeholderTextColor={'#666'}
              value={category}
              onChangeText={setCategory}
            />
            <Text style={styles.label}>Definition</Text>
              <TextInput
                style={styles.input}
                placeholder='Meaning'
                placeholderTextColor={'#666'}
                value={definition}
                onChangeText={setDefinition}
              />
            <Text style={styles.label}>Example</Text>
              <TextInput
                style={styles.input}
                placeholder='Example'
                placeholderTextColor={'#666'}
                value={example}
                onChangeText={setExample}
              />
            <Text style={styles.label}>Image</Text>
            <Button title="Choose from Device" />
              {/* <View style={styles.campo}>
                    <Text style={styles.label}>Date start</Text>
                    
                    <View style={styles.fechaSContenedor}>
                        <DatePicker 
                            date={timeStart}
                            locale='es'
                            onDateChange={ (date) => setTimeStart(date) }
                        />
                    </View>

                    <Text style={styles.label}>Day end</Text>
                    <View style={styles.fechaSContenedor}>
                        <DatePicker 
                            date={timeStart}
                            locale='es'
                            onDateChange={ (date) => setImageEnd(date) }
                        />
                    </View>
                    <Text style={styles.label}>Times per day</Text>
                      <TextInput
                        keyboardType="number-pad"
                        style={styles.input}
                        placeholder='Times per day'
                        placeholderTextColor={'#666'}
                      />
              </View> */}
          </View>

            <Pressable 
              style={styles.btnNuevo} 
              onPress={handleWord} >
              <Text style={styles.btnNuevoTxt}>
                Add
              </Text>
            </Pressable>

        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
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

export default formulario

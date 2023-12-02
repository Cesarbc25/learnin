import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Modal, StyleSheet, SafeAreaView, Text, View, ScrollView, Pressable, FlatList } from 'react-native'

import Formulario from '../components/Formulario'
import Word from '../components/Word'

const Vocab = ({ modalVisibleWords, setModalVisibleWords }) => {
  
  // const [words, setWords] = useState([])
  const [words, setWords] = useState([])

  return (
    <Modal
      animationType='slide'
      visible={modalVisibleWords}
    >
      <SafeAreaView 
            visible={modalVisibleWords}
            style={styles.contenedor}>
          <Pressable style={ styles.btnCancel }
            onPress={ () => setModalVisibleWords(false)}
          >
          <Text style={ styles.btnCancelTxt }> Cancel X </Text>
          </Pressable>


          {words.length === 0 ? 
          <Text style={styles.noWords}>No hay palabras aún</Text> :
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
          }
          
      </SafeAreaView>
    </Modal>
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
  noWords: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24, 
    fontWeight: '600'
  }

})

   
export default Vocab;

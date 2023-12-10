import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Modal, StyleSheet, SafeAreaView, Text, View, ScrollView, Pressable } from 'react-native'
/******
 * Move parameter another component
 * 
 * wordEdit
 */
const Word = ({ item, setModalVisible, setWord, wordEdit, setModalWords }) => {
  
  //const navigation = useNavigation();

  const { word, traduction, category, id } = item

  return (
    // <Pressable
    // onPress={() => {
    //   setModalWords(true)
    //   setWord(item)
    // }}
    // >
      <View style={styles.contenedor}>
        <Text style={styles.label}> {word} </Text>
        <Text style={styles.texto}> {traduction} </Text>
        <Text style={styles.category}> {category} </Text>

        <View style={styles.contenedorBotones}>
          <Pressable 
            style={[styles.btn, styles.btnEdit]}
            onLongPress={() => {
              setModalVisible(true)
              wordEdit(id) /// PARAMETER 
            }}
          >
            <Text style={styles.btnText}>Edit</Text>
          </Pressable>

          <Pressable style={[styles.btn, styles.btnDelete]}>
            <Text style={styles.btnText}>Delete</Text>
          </Pressable>

        </View>

      </View>
    // </Pressable>
    
    // <Modal
    //   animationType='slide'
    //   visible={modalVisibleWords}
    // >
    //   <SafeAreaView style={styles.contenedor}>
    //     <ScrollView>
    //       <Pressable style={ styles.btnCancel }
    //         onPress={ () => setModalVisibleWords(false)}
    //       >
    //       <Text style={ styles.btnCancelTxt }> Cancel X </Text>
    //       </Pressable>
    //       {/* <Text style={styles.label}>{word}</Text>
    //       <Text style={styles.texto}>{wordES}</Text> */}
    //     </ScrollView>
    //   </SafeAreaView>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 15,
    borderBottomColor: '#94a2B8',
    borderBottomWidth: 3, //Mark separation between label
    borderRadius: 10
  },
  label: {
    color: '#98ceca',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
  texto: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
  },
  category: {
    color: '#374151'
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
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15
  },
  btn: {
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  btnEdit: {
    backgroundColor: "#F59E0B"
  },
  btnDelete: {
    backgroundColor: "#EF4444"
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF'
  }

})

   
export default Word;

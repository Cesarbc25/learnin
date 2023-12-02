import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Modal, StyleSheet, SafeAreaView, Text, View, ScrollView, Pressable } from 'react-native'

const Word = ({ item }) => {
  
  //const navigation = useNavigation();

  const { word, wordES } = item

  return (

    <View style={styles.contenedor}>
      <Text style={styles.label}> {word} </Text>
      <Text style={styles.texto}> {wordES} </Text>
    </View>
    
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
    padding: 20,
    borderBottomColor: '#94a2B8',
    borderBottomWidth: 3 //Mark separation between label
  },
  label: {
    color: '#98ceca',
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
  }

})

   
export default Word;

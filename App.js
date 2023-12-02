import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Formulario from './src/components/Formulario'
import Verbs from './src/components/Verbs';
import Word from './src/components/Word';
import Vocab from './src/components/Vocab';
// const navigation = useNavigation();

/**
useState
useEffect
useContext
*/

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.dark: Colors.lighter,};

  // SHOW MODAL FORMULARIO
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleVerbs, setModalVisibleVerbs] = useState(false)
  const [modalVisibleWords, setModalVisibleWords] = useState(false)

  const [words, setWords] = useState([])
  const [verb, setVerb] = useState([])

  // const navigation = useNavigation();


  setTimeout(() => {
    setModalVisible(false)
  }, 100000);

  setTimeout(() => {
    setModalVisibleWords(false)
  }, 100000);

  /** debug cmd + D **/

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Categorías {''}
        {/* <Text style={styles.tituloBold}>Veterinaria</Text> */}
      </Text>
    
      <Pressable
        style={styles.btnAdd}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text
          style={styles.btnAddText}
        >Add</Text>
      </Pressable>
    

      {/* <Pressable
        style={styles.btnPhrsal}
      > */}
      <Pressable
        style={styles.btnPhrsal}
        onPress={() => setModalVisibleWords(!modalVisibleWords)}
      ></Pressable>
      <Text
        style={styles.btnTextPhrsal}
      >Verbs
      </Text>
      {/* </Pressable> */}
    
      {words.length === 0 ? 
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
      }
    
      <Formulario
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        words={words}
        setWords={setWords}
      />

      <Vocab
        modalVisibleWords={modalVisibleWords} 
        setModalVisibleWords={setModalVisibleWords}
        words={words}
        setWords={setWords}

      />


      <Modal
        visible={modalVisibleWords}
        animationType='slide'
      >
      </Modal>
    
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 7
  },
  app:{
    textAlign: 'center',
    fontSize: 50,
    color: '#98ceca',
    fontWeight: '800',
    marginTop: 30

  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    color: '#374151',
    fontWeight: '700'
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
  }
});

export default App;

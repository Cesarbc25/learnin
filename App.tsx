import React, { useState, useEffect } from 'react';
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
import 'react-native-gesture-handler'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Formulario from './src/components/Formulario'
import Verbs from './src/components/Verbs';
import Word from './src/components/Word';
import Vocab from './src/components/Vocab';
import Home from './src/components/Home';
import InfoWord from './src/components/InfoWord';
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
  const [modalWords, setModalWords] = useState(false)

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
  <>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
              name="Home"
              component={ Home }
              options={{
                  title: "Learnin"
              }}
          >
          </Stack.Screen>
          <Stack.Screen
              name="Vocab"
              component={ Vocab }
              options={{
                title: "Vocab"
              }}
          >

          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  </>
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

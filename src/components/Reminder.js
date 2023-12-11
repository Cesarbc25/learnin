import React, { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView, Text, Pressable, Button, StyleSheet, Modal } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const Reminder = ( { modalVisibleRemind, setModalVisibleRemind, closeModalRemind } ) => {

    const [id, setId] = React.useState('')
    const [type, setType] = React.useState('')
    const [days, setDays] = React.useState('')
    const [notification, setNotification] = React.useState('')


    const [count, actualCount] = React.useState(1);
    const [countTimeStart, setCountTimeStart] = React.useState(0);
    const [countTimeEnd, setCountTimeEnd] = React.useState(0);
    const increase = () => {
      actualCount(count + 1);
    };
    const decrease = () => {
      actualCount(count - 1);
    };

    const increaseTimeStart = () => {
      setCountTimeStart(countTimeStart + 1)
        // === 0.60|1.60|2.60||3.60|4.60|5.60|6.60|7.60|8.60|9.60|10.60|11.60|12.60|13.60|14.60|15.60|16.60|17.60|18.60|19.60|20.60|21.60|22.60|23.60|24.60 ? countTime + .40 : countTime + .10 );
    };

    const decreaseTimeStart = () => {
      setCountTimeStart(countTimeStart - 1);
    };

    const increaseTimeEnd = () => {
      setCountTimeEnd(countTimeEnd + 1)
        // === 0.60|1.60|2.60||3.60|4.60|5.60|6.60|7.60|8.60|9.60|10.60|11.60|12.60|13.60|14.60|15.60|16.60|17.60|18.60|19.60|20.60|21.60|22.60|23.60|24.60 ? countTime + .40 : countTime + .10 );
    };

    const decreaseTimeEnd = () => {
      setCountTimeEnd(countTimeEnd - 1);
    };

  return (
      <Modal
        animationType='slide'
        visible={modalVisibleRemind}
      >
        <SafeAreaView
          style={styles.contenido}
        > 
        <ScrollView>

          <Pressable
            
              onPress={() => setModalVisibleRemind(!modalVisibleRemind)}
            
            style={ styles.btnCancel }
          >
            <Text style={ styles.btnCancelTxt }> Cancel X </Text>
          </Pressable>
          <View style={styles.campo}>

            <Text style={styles.label}>Select</Text>
            
            
            <Text style={styles.label}>Words per</Text>
           <View style={styles.containerDI} >
            <Pressable 
                disabled={count < 10}
                onPress={decrease} 
              >
              <Text style={styles.labelDi}>-</Text>
              </Pressable> 
              <TextInput
                value={count}
              >{count}</TextInput>
              <Pressable 
                disabled={count > 29}
                onPress={increase} 
              >
              <Text style={styles.labelDi}>+</Text>
              </Pressable> 
           </View>

            <Text style={styles.label}>Start</Text>
            <View style={styles.containerDI}>
              <Pressable 
                disabled={countTimeStart < 1}
                onPress={decreaseTimeStart} 
              >
                <Text style={styles.labelDi}>-</Text>
              </Pressable> 
                <TextInput
                  value={countTimeStart}
                >{countTimeStart} : 00</TextInput>
              <Pressable 
                disabled={countTimeStart > 22}
                onPress={increaseTimeStart} 
              >
                <Text style={styles.labelDi}>+</Text>
              </Pressable> 
              </View>

            <Text style={styles.label}>End</Text>
              <View style={styles.containerDI}>
                <Pressable 
                  disabled={countTimeEnd < 1}
                  onPress={decreaseTimeEnd} 
                >
                  <Text style={styles.labelDi}>-</Text>
                </Pressable> 
                  <TextInput
                    value={countTimeEnd}
                    >{countTimeEnd} : 00</TextInput>
                <Pressable 
                  disabled={countTimeEnd > 22}
                  onPress={increaseTimeEnd} 
                >
                  <Text style={styles.labelDi}>+</Text>
                </Pressable> 
              </View>

            <Text style={styles.label}>Days</Text>

            <View 
              style={styles.days}
            >
              <Pressable>
              <Text>S</Text>
              </Pressable> 
              
              <Pressable>
              <Text>M</Text>
              </Pressable> 

              <Pressable>
              <Text>T</Text>
              </Pressable> 
              
              <Pressable>
              <Text>W</Text>
              </Pressable> 

              <Pressable>
              <Text>T</Text>
              </Pressable> 

              <Pressable>
              <Text>F</Text>
              </Pressable> 

              <Pressable>
              <Text>S</Text>
              </Pressable> 
            </View>

            <Text style={styles.label}>Notification</Text>

          </View>
          
            <Pressable 
                style={styles.btnSave} 
            >
              <Text style={styles.btnSaveTxt}>
                Save
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
  campo: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 10
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF'
  },
  label: {
    color: '#FFF',
    marginBottom: 10, 
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600'
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
  btnSave: {
    marginVertical: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 5
  },
  btnSaveTxt: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  containerDI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 90
  },
  labelDi: {
    fontSize: 25,
    fontWeight: '700'
  },
  days: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20
  }
});

export default Reminder

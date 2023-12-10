// rafce
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const InfoWord = ({ word, setWord, setModalWords }) => {
    console.log(word)
  return (
<SafeAreaView
            style={styles.contenedor}
        >
           <Text style={styles.titulo}>Word</Text>

            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onLongPress={() => {
                        setModalWords(false)
                        setWord({})
                    }}
                >
                    <Text
                        // style={styles.btnCerrarTexto}
                    >X Cerrar</Text>
                </Pressable>
            </View>
            <View
                style={styles.contenido}
            >
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{word.word}</Text>
                </View>

                {/* <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>
                
                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha Alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View> */}

            </View>
           
        </SafeAreaView>
  )
// rafce
}

const styles = StyleSheet.create({

    contenedor: {
        backgroundColor: '#FFF',
        padding: 20
      },

});

export default InfoWord

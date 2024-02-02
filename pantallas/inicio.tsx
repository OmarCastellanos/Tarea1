import React,{useState} from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Inicio = ({navigation}) =>{
    const handlePress = () => {
    navigation.navigate('Perfil_Omar');
    };
    const handlePress2 = () => {
        navigation.navigate('Perfil_Jeff');
};
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.svContenedor}>
            <Image 
            style={styles.logo}
            source={require('../imagenes/LogoUJCV.png')}/>
            <Text style={styles.cuerpo}>Programacion de dispositivos moviles</Text>
            <Text style={styles.subtitulo}>Tarea 1</Text>
            <Text style={styles.subtitulo}>Catedratico</Text>
            <Text style={styles.cuerpo}>Ing. Carlos Solorzano</Text>
            <Text style={styles.subtitulo}>Alumno </Text>
            <Text style={styles.cuerpo}>Omar Alejandro Castellanos      2018210148</Text>
            <Text style={styles.subtitulo}> </Text>
            <Button title="Mi perfil" onPress={handlePress} />
            <Text style={styles.subtitulo}> </Text>
            <Button title="Jeff Bezos" onPress={handlePress2} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    encabezado:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000000'
          },
          svContenedor:{
           alignItems:'center',
          },
          logo:{
            
            width:150,
            height:225,
          },
          subtitulo:{
            fontSize:18,
            fontWeight:'bold',
            marginTop:20,
            color:"#000000"
          },
          cuerpo:{
            fontStyle:'italic',
            fontSize:16,
            color:'#000000'
          },
          seccion:{
           flexDirection:'row'
          },
});

export default Inicio;
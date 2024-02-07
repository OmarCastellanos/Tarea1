import React,{useState} from 'react';
import {
  Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import Evaluacion from '../components/evaluacion/Evaluacion';

const Perfil_Omar = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Home');
    };
    return (
        <SafeAreaView >
          <ScrollView  
          contentContainerStyle={styles.svContenedor}
          contentInsetAdjustmentBehavior="automatic">
            <Image 
                style={styles.fotoPerfil}
                source={require('../imagenes/fotoPerfil.png')}/>  
                <Evaluacion 
                calificacion={1.5}/>           
                   <Text style={styles.encabezado}>Omar Castellanos</Text>
            <View style={styles.seccion}> 
                <Text style={styles.subtitulo}>Fecha de nacimiento:</Text>
                <Text style={styles.cuerpo}>01 de Octubre de 1999</Text>
            </View >
            <View>
              <Text style={styles.seccion}>
                <Text style={styles.cuerpo}>Mis pasatiempos abarcan una variedad de actividades que me permiten disfrutar de momentos diversos. Me encanta salir con mi novia o amigos, explorar la naturaleza y disfrutar de actividades al aire libre. Los videojuegos me proporcionan entretenimiento y escapismo, mientras que la cocina es mi espacio creativo para experimentar con sabores. Ir al cine y ver documentales son otras formas de enriquecer mis ratos libres. Además, la fotografía me permite capturar momentos especiales y perspectivas únicas. En conjunto, estos pasatiempos contribuyen a una vida llena de experiencias gratificantes y variadas.
                </Text>
              </Text>
              <Button title="Regresar" onPress={handlePress} />
            </View>

          </ScrollView>
        </SafeAreaView>
      );
  }
    const styles = StyleSheet.create({
      encabezado:{
    fontSize:36,
    fontWeight:'bold',
    color:'#000000'
      },
      svContenedor:{
       alignItems:'center',
      },
      fotoPerfil:{
        width:200,
        height:220,
      },
      subtitulo:{
        fontSize:18,
        fontWeight:'bold',
        color:"#000000"
      },
      cuerpo:{
        fontStyle:'italic',
        fontSize:16,
        color:'#000000'
      },
      seccion:{
       flexDirection:'row',
       flexWrap:'wrap'
      },
    }); 
    export default Perfil_Omar;
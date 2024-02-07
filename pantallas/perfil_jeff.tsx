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

const Perfil_Jeff = ({navigation}) => {
  const [calificacion, setCalificacion]= useState(0);
  const handleCalificacionChange = (valor:number)=>{
  setCalificacion  (valor);
    //    console.log(calificacion);
  }
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
            source={require('../imagenes/JeffBezos.jpg')}/>
            <Evaluacion 
                calificacion={calificacion}
                onCalificacionChange={handleCalificacionChange}
                />   
                   <Text style={styles.encabezado}>Jeff Bezos</Text>
           <View style={styles.seccion}> 
            <Text style={styles.subtitulo}>Fecha de nacimiento:</Text>
            <Text style={styles.cuerpo}>12 de Enero de 1964</Text>
            </View >
            <View>
              <Text style={styles.seccion}>
                <Text style={styles.cuerpo}>Admiro profundamente a Jeff Bezos por su capacidad visionaria y su enfoque audaz hacia la innovación y el emprendimiento. Su visión para transformar la manera en que compramos y consumimos a través de la creación de Amazon ha sido revolucionaria. Bezos no solo construyó una empresa exitosa, sino que también demostró una resiliencia extraordinaria ante los desafíos empresariales. Su habilidad para mantenerse enfocado en sus objetivos a largo plazo, incluso en medio de la adversidad, es inspiradora. Además, aprecio su dedicación a la exploración espacial a través de Blue Origin, evidenciando su compromiso con la expansión de los límites de la tecnología y la exploración humana. Jeff Bezos personifica la audacia, la visión y la perseverancia, convirtiéndolo en un referente a seguir en el mundo empresarial y tecnológico.
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
        width:170,
        height:220,
      },
      subtitulo:{
        fontSize:18,
        marginBottom:20,
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
    export default Perfil_Jeff;
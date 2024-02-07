import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import StarEmpty from './StarEmpty';
import StarFilled from "./StarFilled";
import StarHalf from "./StarHalf";

export type EvalProps= {
    calificacion : number;
    onCalificacionChange: any;
};

export type StarProp = {
    posicion:number;
    onClick: any;
}

const Evaluacion = (props: EvalProps) => {
    const handleOnClick =(posicion:number)=>{
        props.onCalificacionChange(posicion+1)
//        console.log(posicion);
    }
// Limita la calificación entre 0 y 5
    const valor = Math.min(Math.max(props.calificacion, 0), 5);

// Calcula el número de estrellas llenas y medias
    const estrellasLlenas = Math.floor(valor);
    const tieneMediaEstrella = valor % 1 !== 0;

// Array para almacenar las estrellas
    const estrellas = [];

// Llena el array con estrellas llenas
for (let i = 0; i < estrellasLlenas; i++) {
    estrellas.push(<StarFilled key={i} posicion={i} onClick={handleOnClick} />);
}

// Agrega media estrella si es necesario
if (tieneMediaEstrella) {
    estrellas.push(<StarHalf key={estrellas.length} posicion={estrellas.length} onClick={handleOnClick} />);
}

// Llena el array con estrellas vacías restantes hasta 5
while (estrellas.length < 5) {
    estrellas.push(<StarEmpty key={estrellas.length} posicion={estrellas.length} onClick={handleOnClick} />);
}

    return (
        <View style={styles.contenedor}>
            {estrellas}
        </View>
    );
};

const styles=StyleSheet.create({
    contenedor:{
        display:'flex',
        flexDirection:'row',
       },
})

export default Evaluacion;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil_Omar from './pantallas/perfil_omar.tsx';
import Inicio from './pantallas/inicio.tsx';
import Perfil_Jeff from './pantallas/perfil_jeff.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
return <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name='Home' component={Inicio}/>
    <Stack.Screen name='Perfil_Omar' component={Perfil_Omar}/>
    <Stack.Screen name='Perfil_Jeff' component={Perfil_Jeff}/>
</Stack.Navigator>
</NavigationContainer>
}

export default App;

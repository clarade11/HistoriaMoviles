import React,{ useState } from 'react';
import { Text,View,Button,TextInput, TouchableOpacity } from 'react-native';

import HistoriaScreen from './HistoriaScreen';
import UsuariosScreen from './UsuariosScreen';
import UsuariosBusquedaStackScreen from '../navigation/UsuariosBusquedaStackScreen';
import styles from '../styles/Styles';





//PANTALLA BUSQUEDA
export default function BusquedaScreen({ navigation }) {
   
    const [age,setAge]=useState();

    //PANTALLA DE BUSCAR USUARIOS
    return (

        <View style={styles.busqueda}>
            <Text style={styles.letra}>Busca aquí tus usuarios por <Text style={styles.letraGordita}>edad</Text></Text>

            <Text style={styles.letra}>Edad</Text>
            <TextInput
                style={styles.input}
                onChangeText={age => setAge(age)}
            />
            <TouchableOpacity
                style={styles.boton}
               
                onPress={() => navigation.navigate('Usuarios',{age:age})} >
                    <Text style={styles.customBtnText}>Buscar</Text>
             </TouchableOpacity>
            
        </View>
    );
}
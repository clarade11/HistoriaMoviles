import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import HistoriaScreen from './HistoriaScreen';
import BusquedaScreen from './BusquedaScreen';
import UsuariosBusquedaStackScreen from '../navigation/UsuariosBusquedaStackScreen';
import styles from '../styles/Styles';

const DATA = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
]

//FILTRO EDAD
function filtroEdad(age,item) { //si la edad del item entra en el rango devuelve el text del nombre y edad
    if (age > item.age) return <Text style={styles.letraSinCentrado}>{item.name}, edad: {item.age}</Text>
}


//PANTALLA DETALLE USUARIO
export default function UsuariosScreen({ route }) {
    const { age } = route.params;

    return (
        <View>
            <ScrollView>
            <Text style={styles.letraGordita}>Tus usuarios son los siguientes</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View>
                        {filtroEdad(age,item)}
                    </View>)
                    }
            />
            </ScrollView>
        </View>
    );
}
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavegacionStack = createNativeStackNavigator();
import BusquedaScreen from '../containers/BusquedaScreen';
import UsuariosScreen from '../containers/UsuariosScreen';


//stack para pulsar para la navegacion
//inicio pantalla STACK
export default function UsuariosBusquedaStackScreen() { //LAS DOS VENTANAS POR LAS QUE NAVEGAREMOS
    return (
      <NavegacionStack.Navigator>
        <NavegacionStack.Screen name="Busqueda" component={BusquedaScreen} //PANTALLA DE LISTADO
          options={{ //detalles del encabezado 
            title: 'Busqueda',
            headerStyle: {
              backgroundColor: '#CAFBF9',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center'
          }} />
        <NavegacionStack.Screen name="Usuarios" component={UsuariosScreen} //PANTALLA DE DETALLE
          options={{
            title: 'Usuarios',
            headerStyle: {
              backgroundColor: '#CAFBF9',
            },
            headerTintColor: 'black',
            headerTitleAlign: 'center',
          }} />
      </NavegacionStack.Navigator>
    );
  }
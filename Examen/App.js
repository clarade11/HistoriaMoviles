import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import HistoriaScreen from './src/containers/HistoriaScreen';
import UsuariosBusquedaStackScreen from './src/navigation/UsuariosBusquedaStackScreen';



function App() {
  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    //tab para navegacion abajo, o que nunca va a cambiar

    <NavigationContainer>

      <Tab.Navigator //LOS ICONOS DE LAS PANTALLAS PRINCIPALES DEL MENU
        
          
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { //ICONOS
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused ? 'ios-folder-open-outline' : 'ios-folder'; //pongo el outline cuando está ese tab pulsado, porque mola mas
            } else if (route.name === 'Usuarios') {
              iconName = focused ? 'ios-body-outline' : 'ios-body';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#125653',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor:'#CAFBF9'
        }
        
        )}
      >
        
        
      <Tab.Screen options={{ headerShown: false }} name="Historia" component={HistoriaScreen}
      //EDITO EL HEADER DE PANTALLA INFORMACION
      options={{
        title: 'Historia',
        headerStyle: {
          backgroundColor: '#CAFBF9',

        },
        headerTintColor: 'black',
        headerTitleAlign: 'center'
  }}/>
      <Tab.Screen options={{ headerShown: false }} name="Usuarios" component={UsuariosBusquedaStackScreen}/>


      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;


import { StyleSheet } from 'react-native';

//estilos de las cosas
const styles = StyleSheet.create(
  {
    letraGordita: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black'
    },
    letra: {
      textAlign: 'center',
      margin: 3,
      fontSize: 18,
      color: 'black'
    },
    letraSub: {
      textAlign: 'center',
      margin: 3,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    letraSinCentrado: {
      margin: 3,
      fontSize: 18,
      color: 'black'
    },
    view: {
      padding: 20,
    },
    input: {
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 1,
      padding: 6,
      height: 30,
      width: 80,
      marginBottom: 20,
      marginTop: 10,
      marginLeft: 142
    },
    customBtnText: {
      fontSize: 20,
      textAlign: 'center',
      color: "black",
    },
    busqueda: {
      paddingTop: 160,
      textAlign: 'center',
      padding: 20,
      fontSize: 20,
    },
    boton: {

      backgroundColor: "#B5D2D2",
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginLeft: 110,
      marginRight: 110,
      borderRadius: 30
    },

    historia:{
      padding:20,
      paddingLeft:30,
      paddingRight:30,
    },
    letraEspaciado:{
      textAlign: 'justify',
      margin: 3,
      fontSize: 18,
      color: 'black',
      paddingBottom:40
    }


  }
)

export default styles;
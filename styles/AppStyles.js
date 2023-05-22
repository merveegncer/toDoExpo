import { StyleSheet } from 'react-native';
import {backgroundColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 1
    },
    topMargin:{
        marginTop: 8
    },
    bottomMargin:{
        marginBottom: 16
    },

    backgroundCover: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        padding: 16,
        opacity: 0.7
    },
    lightText:{
        color: "#ffffff"
    },
    Headers:{
        fontSize:30
    },
    errorText:{
        color:'#E84855'
    },
    TextInput:{
        alignSelf: 'stretch',
        padding: 8,
        borderBottomWidth: 2,
        fontSize:20,
        marginVertical: 8
    },
    lightTextInput:{
        borderBottomColor: "#ffffff"
    },
    fontsize:{
        fontSize:17
    },
    inlineTextButton:{
        color:"#89D2DC",
        fontSize:17,
    
    },
    pressedInlineTextButton:{
        color:"#b2d8d8",
        opacity: 0.6,
        fontSize:20
    }
  });

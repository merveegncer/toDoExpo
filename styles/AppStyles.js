import { StyleSheet } from 'react-native';
import {backgroundColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerPadding:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },

    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'stretch',
        justifyContent: 'space-between',
        marginVertical: 1,
        
        marginHorizontal: 0,
    },
    containerForTodos:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 1,
        backgroundColor: "red",
        justifyContent: "flex-end"
    },



    rightAligned:{
        justifyContent: "flex-end"
    },
    rightMargin:{
        marginRight:16
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
    darkTextInput:{
        borderBottomColor: "#00000"
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

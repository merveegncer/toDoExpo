import { Modal } from "react-native-web";
import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import AppStyles from "../styles/AppStyles";


export default function AddToDoModal(props){
    let [todo, setToDo]=React.useState("")
    return(
        <View style={AppStyles.containerPadding}>
            <Text style={AppStyles.Headers}>Add ToDo</Text>
            <TextInput style={[AppStyles.TextInput,AppStyles.darkTextInput]} 
            placeholder='ToDO'
            placeholderTextColor='#fff' 
            value={todo}
            onChangeText={setToDo} />

            <View style={[AppStyles.rowContainer, AppStyles.rightAligned,AppStyles.rightMargin ]}>
                <Button title="Cancel" onPress={props.onClose}/>
                <Button title="    Ok    " onPress={()=>{
                    props.addToDo(todo);
                    setToDo("")
                    props.onClose();
                }}/>
            </View>

        </View>
    )

}
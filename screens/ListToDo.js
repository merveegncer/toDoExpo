import {View, Button, Text, SafeAreaView, Modal} from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import AddToDoModal from '../components/AddToDoModal';

export default function ListToDo({navigation, route}){

    let [modalVisible, setModalVisible]=React.useState(false);

    let logout=()=>{
        signOut(auth).then(() => {
            
        navigation.navigate('Login');
        });

    }

    let showContent=()=>{
        return(
            <View style={AppStyles.containerPadding}>
                <Button 
                title="Add ToDo" 
                onPress={()=>setModalVisible(true)} 
                 color={"#FF9549"}/>
            </View>
        );
        
    };

    let showSendVerificationEmail=()=>{
        return(
        <View>
              <Text> Please verifiy your email</Text>
              <Button title= "send Email Verification" onPress={()=> sendEmailVerification(auth.currentUser)}/>
        </View>
        )
    };

    return(
        <SafeAreaView style = {AppStyles.containerPadding}>
            <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin]}>
                <InlineTextButton text="Manage Account" color= "#726DA8"/>
            </View>

            <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=>setModalVisible(false)}>
            
            
            <AddToDoModal 
                onClose={()=> setModalVisible(false)}
                addToDo={(todo)=> console.log(todo)}
            />

            
            </Modal>

            <Text style={AppStyles.Headers}>ToDo</Text>
            {auth.currentUser.emailVerified ? showContent(): showSendVerificationEmail()}
            <Button title='Log Out' onPress={logout}/>
        </SafeAreaView>
    )
}
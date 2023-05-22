
import { Text, View, ImageBackground, TextInput, Button} from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import ResetPassword from './ResetPassword';
import {auth, currentUser } from '../firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import ListToDo from "./ListToDo";

export default function Login({navigation}) { 

  const ocean_background = require("../assets/ocean_background.jpg");

  if(auth.currentUser){
    navigation.navigate("ListToDo")
  }

  
  let [email, setEmail]=React.useState("")
  let [Password, setPassword]=React.useState("")
  let [errorMessage, setErrorMessage]=React.useState("")

  let Login = () => {
    if(email !=="" && Password !== ""){
      signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        navigation.navigate("ListToDo", {user: userCredential.user});
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
        }else{
          setErrorMessage("Please enter an e mail and password")
        }
      }

  return (
    <ImageBackground style={AppStyles.container}source={ocean_background}>
      <View style={AppStyles.backgroundCover}>

        <Text style={[AppStyles.lightText , AppStyles.Headers]}>Login</Text>
        <Text style={AppStyles.errorText }>{errorMessage}</Text>

        <TextInput style={[AppStyles.TextInput,AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email'
          placeholderTextColor='#fff' 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput style={[AppStyles.TextInput,AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Password' 
          placeholderTextColor='#fff' 
          secureTextEntry={true} 
          value={Password}
          onChangeText={setPassword}/>
          
          <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
            <Text style={[AppStyles.lightText, AppStyles.fontsize]}> Don't have account?    
            <InlineTextButton text="  sing up" onPress={()=>navigation.navigate('SignUp')} />
            
            </Text>
          </View>
          <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
            <Text style={[AppStyles.lightText, AppStyles.fontsize]}> Forgotten your password?    
            <InlineTextButton text="  reset"  onPress={()=>navigation.navigate(ResetPassword)}/>
            </Text>
          </View>
          <Button title='Login' onPress={Login} color={"#6564DB"}/>
       

      </View> 
      
    </ImageBackground>
  );
}



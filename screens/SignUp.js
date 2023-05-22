import { Text, View, ImageBackground, TextInput, Button} from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from 'firebase/auth';
import ListToDo from './ListToDo';


export default function SignUp({navigation}) {
  const ocean_background = require("../assets/ocean_background.jpg")
  let [email, setEmail]=React.useState("")
  let [Password, setPassword]=React.useState("")
  let [confirmPassword, setConfirmPassword]=React.useState("")
  let [validationMessage, setValidationMessage]=React.useState("")

  let validateAndSet = (value, valueToCompare, setValue)=>{
    if(value!== valueToCompare){
      setValidationMessage("passwords do not match ");
    }else{
      setValidationMessage("");
    }
    setValue(value);
  };

  let SignUp=()=>{
    if(Password === confirmPassword){
      createUserWithEmailAndPassword(auth, email, Password).then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate(ListToDo, {user: userCredential.user});
      })

      .catch((error) => {
        setValidationMessage(error.message);
      });
    
      
    }
  }

  return (
    <ImageBackground style={AppStyles.container}source={ocean_background}>
      <View style={AppStyles.backgroundCover}>
        <Text style={[AppStyles.lightText , AppStyles.Headers]}>Sign Up</Text>

        <Text style={AppStyles.errorText}> {validationMessage}</Text>

        <TextInput style={[AppStyles.TextInput,AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email'
          placeholderTextColor='#fff' 
          value={email}
          onChangeText={setEmail} />

        <TextInput style={[AppStyles.TextInput,AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Password' 
          placeholderTextColor='#fff' 
          secureTextEntry={true} 
          value={Password}
          onChangeText={(value)=> validateAndSet(value,confirmPassword ,setPassword)}/>
        <TextInput style={[AppStyles.TextInput,AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Confirm Password' 
          placeholderTextColor='#fff' 
          secureTextEntry={true} 
          value={confirmPassword}
          onChangeText={(value)=> validateAndSet(value,Password ,setConfirmPassword)}/>
          
          <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
            <Text style={[AppStyles.lightText, AppStyles.fontsize]}> Already have an account?    
            <InlineTextButton text="  Login" onPress={()=>navigation.navigate('Login')} />
            </Text>
          </View>

          <Button title="Sign Up" onPress={SignUp} color={"#6564DB"}/>

      </View> 
      
    </ImageBackground>
  );
}



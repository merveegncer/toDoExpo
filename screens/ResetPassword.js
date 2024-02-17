import { Text, View, ImageBackground, TextInput, Button} from 'react-native';
import AppStyles from '../styles/AppStyles';
import React from 'react';
import InlineTextButton from '../components/InlineTextButton';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({navigation}) {
  const ocean_background = require("../assets/ocean_background.jpg")
  let [email, setEmail] = React.useState("")
  let [errorMessage, setErrorMessage] = React.useState("")
  
  // Fonksiyonun ismi küçük harfle başlamalıdır: resetPassword
  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      navigation.popToTop();
    })
    .catch((error) => {
      setErrorMessage(error.message)
    });
  }

  return (
    <ImageBackground style={AppStyles.container} source={ocean_background}>
      <View style={AppStyles.backgroundCover}>
        <Text style={[AppStyles.lightText , AppStyles.Headers]}>Reset Password</Text>

        <TextInput style={[AppStyles.TextInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email'
          placeholderTextColor='#fff' 
          value={email}
          onChangeText={setEmail}
        />
      
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={[AppStyles.lightText, AppStyles.fontsize]}> Don't have account?    
            <InlineTextButton text="  sign up" onPress={() => navigation.navigate('SignUp')} />
          </Text>
        </View>
  
        <Button title='Reset' color={"#6564DB"} onPress={resetPassword} />
      </View> 
    </ImageBackground>
  );
}

import {View, Button} from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function List({navigation, route}){

    let logout=()=>{
        signOut(auth).then(() => {
            
        navigation.navigate('Login');
        });

    }

    return(
        <View style = {AppStyles.container}>
            <Button title='Log Out' onPress={logout}/>
        </View>
    )
}
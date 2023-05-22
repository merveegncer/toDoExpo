import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import ListToDo from './screens/ListToDo';

const stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name='Login'
          component={Login}
          options={{headerShown:false}}
        />
        <stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShown:false}}
        />
          <stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{headerShown:false}}
        />
             <stack.Screen
          name='ListToDo'
          component={ListToDo}
          options={{headerShown:false}}
          initialParams={{ user: { proactiveRefresh: { user: null } } }}
        />


      </stack.Navigator>
    </NavigationContainer>  

   
  );
}



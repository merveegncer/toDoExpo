
//64.satirda email dogrulanmissa showcontent gidilir ve add todo tiklandiginda modal gorunul olur


import {View, Button, Text, SafeAreaView, Modal, ActivityIndicator, FlatList} from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth} from '../firebase';
import { signOut } from 'firebase/auth';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import AddToDoModal from '../components/AddToDoModal';
import { collection, addDoc, query, where,getDocs , deleteDoc, doc} from "firebase/firestore"; 
import { db } from "../firebase"; // Firestore veritabanı referansını buradan alın
import BouncyCheckbox from 'react-native-bouncy-checkbox';




export default function ListToDo({navigation}){

    let [modalVisible, setModalVisible]=React.useState(false);
    let [isLoading, setIsLoading]= React.useState(true);
    let [toDos, setToDos] = React.useState([]);

    let loadToDoList=async()=>{
        console.log("kontrol loadtodolist");

        //mevcut user icin sorgu olusturuyor
        const q = query(collection(db, "todos"), where("userId", "==", auth.currentUser.uid));
// sorgu firestorda olur geriye querysnapshot nesnesi yani belgeler doner
        const querySnapshot = await getDocs(q);
        let toDos =[];
// belgelerin hepsi dolasilir her belge toDoya atilir ordan toDos dizisine atilir
        querySnapshot.forEach((doc) => {
            let toDo = doc.data();
            toDo.id = doc.id;
            toDos.push(toDo);
        });
        console.log(toDos);
// toDos guncellenir
        setToDos(toDos);
        console.log("kontrol settodo"),

        setIsLoading(false);
    };

    if(isLoading){
        console.log("kontrol isloading"),

        loadToDoList();
    }




    let logout=()=>{
        signOut(auth).then(() => {
        navigation.navigate('Login');
        });
    }

    let checkToDoItem =(item, isChecked)=>{

    }

    let deleteToDoItem = async(toDoId)=>{
        console.log("siliyor mu")
        await deleteDoc(doc(db, "todos", toDoId));
        let updatedToDos = [...toDos].filter((item)=> item.id != toDoId);
        setToDos(updatedToDos);
    }

    let renderToDoItem = ({item}) => {
        return(
            console.log("kontrol"),
            <View style={AppStyles.rowContainer} >
                
                <BouncyCheckbox
            
                    isChecked = {item.completed}
                    size={25}
                    fillColor="#726DA8"
                    unfillColor="#FFFFFF"
                    text={item.text}
                    iconStyle={{ borderColor: "#726DA8" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(isChecked) => {checkToDoItem(item,isChecked)}}
                    />
                        <InlineTextButton text="     delete"  color='red' onPress={()=>deleteToDoItem(item.id)}/>
            </View>
        )
        
    }


    let showToDoList=()=>{

        return(

            <FlatList
                data={toDos}
                renderItem={renderToDoItem}
                keyExtractor={item=>item.id}
                
                />

        )

    }


    let showContent=()=>{
        return(
            console.log("kontrol showcontent"),

            <View style={AppStyles.containerPadding}>
                {isLoading? <ActivityIndicator size= "large"/>: showToDoList()}
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



    let addToDo = async (todo) => {

        let toDoToSave={
            text: todo,
            completed: false,
            userId: auth.currentUser.uid
        };
        
        const docRef = await addDoc(collection(db, "todos"), toDoToSave);

        toDoToSave.id = docRef.id;
        let updatedToDos = [...toDos];
        updatedToDos.push(toDoToSave);
        setToDos(updatedToDos);

          console.log(docRef.id);
          console.log(docRef.data);

        
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
                addToDo={addToDo} />

            
            </Modal>

            <Text style={AppStyles.Headers}>ToDo</Text>
            {auth.currentUser.emailVerified ? showContent(): showSendVerificationEmail()}
            <Button title='Log Out' onPress={logout}/>
        </SafeAreaView>
    )
}
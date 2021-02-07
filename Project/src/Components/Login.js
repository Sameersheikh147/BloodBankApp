

import HeaderIconExample from './Header'

// export default class Login extends Component {

//   render() {
//     return (

    
//     <Text>LOGIN</Text>


//     );
//   }
// }




// import React, { useState } from 'react';

// import { Container,  Content, Form, Item, Input, Label ,Button } from 'native-base';
// import{View,Text,StyleSheet} from 'react-native'

// export default function Login (props)  {

//     return (
//       <Container  >
//         <Content  style={styles.container}  >
//         <View  style={styles.container}>
//         <Text     >Wellcome to blood bank</Text>
//          </View>
//           <Form >
//             <Item fixedLabel>
//               <Label>Username</Label>
//               <Input   />
//             </Item>
//             <Item fixedLabel last>
//               <Label>Password</Label>
//               <Input secureTextEntry={true}  />
//             </Item>
//           </Form>
//              <Button full    style={styles.Button}          onPress={()=>props.navigation.navigate("Home")} title="go to Home" >
//                   <Text   >Login in</Text>
//               </Button>

         
//         </Content>
      
//       </Container>
    
//     );
//   }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   Button:{
//     paddingTop:100,
//     flex :1,
// }

// })













import React,  { useState }   from 'react';
import {View, StyleSheet} from 'react-native';
import {Form, Item, Input,  Text, Button, Content} from 'native-base';




  export default function Login (props)  {
             
             
              const [userEmail, setUserEmail] = useState('');
             const [userPassword, setUserPassword] = useState('');

            // const [userName, setUserName] = useState('');




            console.log(userEmail,userPassword)

             
             
    
    return (
      
      <View style={styles.container}>
        <View style={styles.top}></View>

        <View style={styles.middle}>
          <Text style={styles.textContainer}   >Wellcome To Bood Bank </Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Username"   
                 keyboardType="email-address"   
                autoCapitalize="none"  
                autoCorrect={false}    value={userEmail} onChangeText={(userEmail) => setUserEmail(userEmail)}  style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password"     value={userPassword} onChangeText={(userPassword) => setUserPassword(userPassword)}     secureTextEntry={true}     style={styles.Input} />
              </Item>

              <View style={styles.Button}>
                <Button  style={styles.mainBtn} onPress={()=>props.navigation.navigate("Home")}   title="go to Home"      >
                  <Text style={styles.btnText}>Submit</Text>
               </Button>


                   <Button  style={styles.regBtn} onPress={()=>props.navigation.navigate("Form")} title="go to Form"  >
                  <Text style={styles.regText}    >Resgister</Text>
                </Button>
 
              </View>
              
            </Form>
          </View>
        </View>
      
      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#960404',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 150,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  textContainer: {
    color: '#FCFDFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 28,
    marginBottom: 30,
    position: 'relative',
    top: '6%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    top: '5%',
    paddingBottom: 10,
  },
  signin: {
    top: 15,
    color: 'red',
    marginTop: 10,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  Button: {
    padding: 20.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#788aa4',
    borderRadius:5,
    width:"42%"
  },
  btnText: {
    color: 'red',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
    marginLeft: 17 ,

  },

 


  regBtn:{
    marginTop:22.5,
  marginStart:180,
    borderRadius:5,
    width:"40%",
    position: "absolute",
    textAlign:"center",

 backgroundColor:"black"
  },
  regText:{
    color: 'red',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
    textAlign:"auto",
    marginLeft: 5 ,
  }


});



















































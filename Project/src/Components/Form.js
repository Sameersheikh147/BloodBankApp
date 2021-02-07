// import React, { Component } from 'react';

// import{View,Text} from 'react-native'



// import { Container,  Content, Form, Item, Input, Label ,Button } from 'native-base';



// export default class Form extends Component {
//     render() {
//       return (
//         <View style={styles.container}>
//           <Form type={User} /> {/* Notice the addition of the Form component */}
//         </View>
//       );
//     }
//   }













import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import {Form, Item, Input,  Text, Button} from 'native-base';




  export default function form (props)  {


    // const [userEmail, setUserEmail] = useState('');
    // const [userPassword, setUserPassword] = useState('');






                
    return (
             
      
      <View style={styles.container}>
        <View style={styles.top}></View>

        <View style={styles.middle}>
          <Text style={styles.textContainer}   >Wellcome To Blood Bank </Text>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Register</Text>
            <Form style={styles.mainForm}>

            

                
              <Item style={styles.formItems}>
                <Input placeholder="Full Name" style={styles.Input} />
              </Item>



              <Item style={styles.formItems}>
                <Input placeholder="Email Address"      keyboardType="email-address" autoFocus={true}    style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password"   secureTextEntry={true}          style={styles.Input} />
              </Item>

              <View style={styles.Button}>


                <Button  style={styles.mainBtn} onPress={()=>props.navigation.navigate("Home")} title="go to Home"  >
                  <Text    style={styles.btnText}>Register</Text>
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
    fontSize: 24,
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
    marginTop: 5,
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
    width:"42%",
    marginLeft: 80 ,

  },
  btnText: {
    color: 'red',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
    marginLeft: 13 ,

  },
  img3:{
      width:100,
  }
});
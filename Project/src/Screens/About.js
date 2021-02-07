import { Container } from 'native-base';
import React from 'react'
import{View,Text,Button} from 'react-native'
import FooterTabsIconTextExample from '../Components/Header'








export default    function About (){
   
    return(
        <Container>

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize: 33}}>About Screen</Text>
           
        </View>


        <FooterTabsIconTextExample/>

          </Container>
    

    );
}





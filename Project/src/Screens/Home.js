




import React from 'react'
import{View,Text,Button,Image ,StyleSheet ,ScrollView  } from 'react-native'
import FooterTabsIconTextExample from '../Components/Header'

import { Container, Content,Item, List, ListItem, InputGroup, Input, Icon,  Picker, Radio, Form, } from 'native-base';


 export default function Home (props){
    return(
        <Container >

            <View style={{justifyContent:'center',alignItems:'center',  margin:20, }}>
                <Text style={{color:"#960404",fontSize: 28}}> Upgrade Profile</Text>
            </View>

                
                     {/* <List>
                        <ListItem>
                            <ScrollView>
                            <Radio selected={false} />
                            <Text>Daily Stand Up</Text>



                            <Radio selected={true} />
                            <Text>Discussion with Client</Text>
            
                
                            <Radio selected={true} />
                            <Text>Discussion with Client</Text>
                            </ScrollView>
                        </ListItem>
                    </List> */}
             <View style={{marginTop:2,}}   >       
            <Item error>
            <Input keyboardType="email-address"    placeholder='Optional Email'/>
          </Item>
          </View>



          <View style={{marginTop:2,}}   >       
            <Item error>
            <Input     keyboardType="numeric"    placeholder='Number'/>
          </Item>
          </View>

                <View  >
                 <ScrollView style={{marginTop:12,}}>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"   >
                        <Item  style={{margin:20,}}   label="Blood Group" value="Blood Group" />
                        <Item label="A-" value="A-" />
                        <Item label="A+" value="A+" />
                        <Item label="B+" value="key3" />
                        <Item label="B-" value="key3" />
                        <Item label="O+" value="key3" />
                        <Item label="O-" value="key3" />
                        <Item label="AB+" value="key3" />
                        <Item label="AB-" value="key3" />

                   </Picker>
                     </ScrollView>
                   </View>



                   <View  style={{marginTop:2,}}>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"   >
                        <Item  style={{margin:20,}}   label="Gender" value="Blood Group" />
                        <Item label="Male" value="A-" />
                        <Item label="Female" value="A-" />
                   </Picker>
                   </View>

                        
                    <View  style={{top:30,}}   >          
                         <Button  onPress={()=>props.navigation.navigate("About")} title="Next"></Button> 
                    </View>

        {/* </View>  */}
        <FooterTabsIconTextExample/>
        </Container>
    )
}


// const styles = StyleSheet.create({
//         img:  {
//           resizeMode:"cover",
//             width:null,
//             height:150,
//         },
// });



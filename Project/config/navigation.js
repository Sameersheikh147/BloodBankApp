import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/Components/Login'
import About from '../src/Screens/About'
import Home from '../src/Screens/Home';
import ALLUSER from '../src/Components/AllUSER'
import { colors } from 'react-native-elements';
import Form from '../src/Components/Form';


const Stack = createStackNavigator();

function Navigation(props) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen   options={{   title:"Donar ", headerStyle:{ backgroundColor:" orange ",  }}}            name="Login" component={Login}  />
          
          <Stack.Screen    options={{   title:"  Donar ", headerStyle:{ backgroundColor:" orange " , }}}        name="Form" component={Form}  />
          <Stack.Screen   options={{   title:"  Profile   Account ", headerStyle:{ backgroundColor:" red  " , }}}            name="Home" component={Home}/>


          <Stack.Screen   options={{   title:"    Donar Account  ", headerStyle:{ backgroundColor:" red  " , }}}            name="About" component={About}/>
          <Stack.Screen   options={{   title:"  Donar Account    ", headerStyle:{ backgroundColor:"  red",  }}}            name="AllUSER" component={ALLUSER} />

          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  
export default Navigation;
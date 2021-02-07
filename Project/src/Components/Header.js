



import React, { Component } from 'react';
import { Container,  Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useLinkProps } from '@react-navigation/native';

 export default  function  FooterTabsIconTextExample (navigation){


    return (
      <Container>
        <Content/>
        <Footer  style={{position:"relative"}}  >
          <FooterTab style={{    backgroundColor: '#960404'    }}    >
            <Button onPress={()=>navigation.navigate("About")}   style={{    backgroundColor: '#960404'    }}             vertical active >
              <Text>Donor </Text>
            </Button>
            <Button style={{    backgroundColor: '#960404'    }}   vertical active  >
              <Text> setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
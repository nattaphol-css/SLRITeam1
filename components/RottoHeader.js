import React, { Component } from 'react'
import {
  Header,
  Left,
  Body,
  Icon,
  Thumbnail,
  Right,
  Button,
  Text
} from 'native-base'
import {
  Image
} from 'react-native'
export default class RottoHeader extends Component{
  render() {
    return (
      <Header>
         <Left>
            <Button
              transparent
              onPress = { this.props.onPress }
            >
               <Icon name='menu' />
            </Button>
         </Left>
         <Body>
           <Text>
             Rotto online
           </Text>
         </Body>
      </Header>
    );
  }
}

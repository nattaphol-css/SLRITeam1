import React, { Component } from 'react'
import {
  Image,
  ScrollView
} from 'react-native'
import {
  Container,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Button,
  Thumbnail
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class RottoContent extends Component{
  render() {
    return (
          <Container>
             <Content>
               <Card>
                    <CardItem >
                        <Left>
                            <Thumbnail source={require('../public/team1.jpg')} />
                            <Body>
                                <Text>Ajarn Mai</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                            <Body>
                                <Image style={{ resizeMode: 'cover' }} source={require('../public/n01.jpg')} />
                                <Text>
                                    //Your text here
                                </Text>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Body>
                        </CardItem>
               </Card>
            </Content>
        </Container>
    );
  }
}

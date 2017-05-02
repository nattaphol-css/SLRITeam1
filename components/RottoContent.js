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
                            <Thumbnail source={require('../public/mai.jpg')} />
                            <Body>
                                <Text style={{color: '#FF8800'}}>อ. ใหม่</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                            <Body>
                                <Image style={{ width:'100%'}} source={require('../public/n01.jpg')} />
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="eye" />
                                    <Right >
                                    <Text style={{color: '#FF0000'}}>4,927</Text>
                                    <Icon name="star" style={{color: '#FF0000'}}/>
                                    </Right>
                                </Button>
                            </Body>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Thumbnail source={require('../public/tao.jpg')} />
                            <Body>
                                <Text>อ. เต๋า</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                            <Body>
                                <Image style={{ width:'100%'}} source={require('../public/n02.jpg')} />
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="eye" />
                                    <Right >
                                    <Text style={{color: '#FF0000'}}>3,946</Text>
                                    <Icon name="star" style={{color: '#FF0000'}}/>
                                    </Right>
                                </Button>
                            </Body>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Thumbnail source={require('../public/toy.jpg')} />
                            <Body>
                                <Text>อ. ต้อย</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                            <Body>
                                <Image style={{width:'100%'}} source={require('../public/n03.jpg')} />
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="eye" />
                                    <Right >
                                    <Text style={{color: '#FF0000'}}>2,826</Text>
                                    <Icon name="star" style={{color: '#FF0000'}}/>
                                    </Right>
                                </Button>
                            </Body>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Thumbnail source={require('../public/nut.jpg')} />
                            <Body>
                                <Text>อ. นัท</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                            <Body>
                                <Image style={{ width:'100%'}} source={require('../public/n04.jpg')} />
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="eye" />
                                    <Right >
                                    <Text style={{color: '#FF0000'}}>1,956</Text>
                                    <Icon name="star" style={{color: '#FF0000'}}/>
                                    </Right>
                                </Button>
                            </Body>
                    </CardItem>
               </Card>
            </Content>
        </Container>
    );
  }
}

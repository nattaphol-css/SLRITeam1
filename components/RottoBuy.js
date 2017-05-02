import React, { Component } from 'react'
import {
  Image,
  Text
} from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Item,
  Input,
  Label,
  Button,
  Body,
  Icon
} from 'native-base'
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class SLRITeam1 extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>Last Three Numbers</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>Upper (Baht)</Label>
                  <Input/>
                </Item>
              </Form>
              <Form>
                <Item stackedLabel>
                  <Label>Lower (Baht)</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>Last Two Numbers</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>Shuffer (Baht)</Label>
                  <Input/>
                </Item>
              </Form>
              <Form>
                <Item stackedLabel>
                  <Label>Direct (Baht)</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
          </Grid>
          <Form>
            <Item stackedLabel>
              <Label>Total Price (Baht)</Label>
              <Input/>
            </Item>
          </Form>
        </Content>
        <Footer >
          <FooterTab>
            <Button full iconLeft success>
              <Icon name='cart'/>
              <Text>Buy Now!</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

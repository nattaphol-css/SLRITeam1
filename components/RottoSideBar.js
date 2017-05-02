import React, { Component } from 'react'
import {
  Button,
  Container,
  Text
} from 'native-base'

export default class RottoSideBar extends Component {
  render() {
    return (
      <Container>
        <Button>
          <Text>Buy rotto</Text>
        </Button>
        <Button>
          <Text>Check rotto</Text>
        </Button>
        <Button>
          <Text>Random</Text>
        </Button>

      </Container>
    );
  }
}

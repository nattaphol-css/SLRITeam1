import React, { Component } from 'react'

// Packages Components
import {
  StyleProvider,
  Container,
  Button,
  Text
} from 'native-base';
//import Drawer from 'react-native-drawer'
// import { Scene, Router } from 'react-native-router-flux'

// Theme
//import getTheme from '../native-base-theme/components';
//import material from '../native-base-theme/variables/material';

// Customize Components
import RottoHeader from './RottoHeader'
import RottoContent from './RottoContent'
// import SynFooter from './SynFooter'
// import SynContent from './SynContent'
// import SideBar from './SideBar'

export default class App extends Component {
  state = {
    isPress: false,
    test: 12
  }

  changeStateIsPress(){
    this.setState({isPress: !this.state.isPress});
  }

  render() {
    return (
      <Container>
        <RottoHeader />
        <RottoContent />
      </Container>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

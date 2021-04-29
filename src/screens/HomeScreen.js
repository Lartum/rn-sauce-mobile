import React, {Component} from 'react';
import {Alert, TextInput, Button, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Container from '../components/Common/Container';
import {uploadToMoe} from '../services/uploadService';

class HomeScreen extends Component {
  navigateTo = route => {
    this.props.navigation.navigate(route);
  };
  render() {
    return (
      <Container>
        <Button
          title="Components Screen"
          onPress={() => this.props.navigation.navigate('Component')}
        />
        <Button
          title="Image Upload Screen"
          onPress={() => this.props.navigation.navigate('Image')}
        />
      </Container>
    );
  }
}
export default HomeScreen;

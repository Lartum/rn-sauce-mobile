import React, {Component} from 'react';
import {Button, Image, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Container from '../components/Common/Container';
import {uploadToMoe} from '../services/uploadService';

class HomeScreen extends Component {
  state = {
    image: '',
  };

  choosePhoto = () => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('No image selected');
      } else {
        this.setState({image: response});
      }
    });
  };

  handleUpload = () => {
    uploadToMoe(this.state.image).then(({data}) => {
      console.log(data);
    });
  };

  render() {
    console.log(this.state.image);
    return (
      <Container>
        {typeof this.state.image == 'object' && (
          <>
            <Image
              source={{uri: this.state.image.uri}}
              style={{width: 180, height: 100}}
            />
            <Button title={'Upload'} onPress={this.handleUpload} />
          </>
        )}
        <Button
          title={this.state.image ? 'Change picture' : 'Choose a picture'}
          onPress={this.choosePhoto}
        />
      </Container>
    );
  }
}
export default HomeScreen;

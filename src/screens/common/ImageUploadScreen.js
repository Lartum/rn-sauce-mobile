import React, {Component} from 'react';
import {Alert, TextInput, Button, Image, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Container from '../../components/Common/Container';
import {uploadToMoe} from '../../services/uploadService';

class ImageUploadScreen extends Component {
  state = {
    image: '',
    errorMsg: '',
    moeData: null,
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
    uploadToMoe(this.state.image).then(({status, data}) => {
      if (status != 200) {
        Alert.alert('Error', data);
        // return this.setState({errorMsg: data});
      }
      this.setState({moeData: data});
    });
  };

  handleErrorAlert = () => {
    Alert.alert('Error', this.state.errorMsg);
  };

  render() {
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
        <TextInput editable />
        <Button
          title={this.state.image ? 'Change picture' : 'Choose a picture'}
          onPress={this.choosePhoto}
        />
      </Container>
    );
  }
}
export default ImageUploadScreen;

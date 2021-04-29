import React, {Component} from 'react';
import {Pressable, View, ScrollView, Text, Button} from 'react-native';

class ComponentScreen extends Component {
  state = {
    buttonClicks: 0,
  };
  buttonPress = () => {
    this.setState({buttonClicks: this.state.buttonClicks + 1});
  };
  render() {
    return (
      <View>
        <Text>
          This is the component screen, and this is being rendered by Text
          component
        </Text>
        <Text>Pressable Text pressed {this.state.buttonClicks} many times</Text>
        <Pressable onPress={this.buttonPress}>
          <Text>Pressable Text, can be Changed into</Text>
        </Pressable>
        <ScrollView>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
          <Text>Scollable views</Text>
        </ScrollView>
        <Button onPress={this.buttonPress} title="React native button" />
      </View>
    );
  }
}
export default ComponentScreen;

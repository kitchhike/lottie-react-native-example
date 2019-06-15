import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View, Animated, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.isLiked ? new Animated.Value(1) : new Animated.Value(0),
      isLiked: this.props.isLiked
    };
  }

  manageAnimation = () => {
    if (this.state.isLiked) {
      this.setState({ progress: new Animated.Value(0), isLiked: false });
    } else {
      Animated.timing(this.state.progress, {
        toValue: 1,
      }).start(() => {
        this.setState({ isLiked: true });
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.manageAnimation()}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('./animation.json')}
            style={styles.animation}
            progress={this.state.progress}
            loop={false}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  animation: {
    width: 150,
  },
});

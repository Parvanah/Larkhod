import React, { Component } from 'react'
import {
  Animated,
  Easing,
  Platform
} from 'react-native'
import BaseScreen from './BaseScreen';
import LogIn from '../LogIn/LogIn';
import { createStackNavigator } from 'react-navigation';
import SignUp from '../SignUp/SignUp';

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        default: SignUp(index, position, width),
      }[transition];
    },
  }
}

const Slider = createStackNavigator({
  SignUp: { screen: SignUp },
  Base: { screen: LogIn },
}, {
    initialRouteName: 'Base',
    headerMode: "screen",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration,
  })

export default Slider

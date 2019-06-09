import React, {
  Component,
} from 'react'

import {
  Text,
  View,
  TextInput,
  Image,
} from 'react-native'

import PropTypes from 'prop-types'

import styles from './style'

import {
  REQUIRED_ICON,
} from '../../constants'

// This is the component which is used to display the field in forms
export default class Field extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired, // This is the key to uniquely identifies the field
    label: PropTypes.string.isRequired, // This is the placeholder text which will be seen in the label
    inputText: PropTypes.string.isRequired, // This is the value in the input 
    onTextChanged: PropTypes.func.isRequired, // This function invoke every time the text changed
  }

  render() {
    const {
      key,
      label,
      inputText,
      onTextChanged,
    } = this.props

    const {
      container,
      labelStyle,
      imageStyle,
      inputStyle,
    } = styles

    return (
      <View
        style={container}
      >
        <Text
         style={labelStyle}
        >
          {label}
        </Text>

        <TextInput
          style={inputStyle}
          onChangeText={text => onTextChanged(key, text)}
          underlineColorAndroid="transparent"
          value={inputText}
        />

        <Image
          source={REQUIRED_ICON}
          resizeMode="contain"
          style={imageStyle}
        />

      </View>
    )
  }
}
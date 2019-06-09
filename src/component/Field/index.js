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
    id: PropTypes.string.isRequired, // This is the key to uniquely identifies the field
    label: PropTypes.string.isRequired, // This is the placeholder text which will be seen in the label
    inputText: PropTypes.string.isRequired, // This is the value in the input 
    onTextChanged: PropTypes.func.isRequired, // This function invoke every time the text changed
  }

  render() {
    const {
      id,
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

    const showLogo = inputText.trim().length <= 0
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
          onChangeText={text => onTextChanged(id, text)}
          underlineColorAndroid="transparent"
          value={inputText}
        />

        {showLogo && (
          <Image
            source={REQUIRED_ICON}
            resizeMode="contain"
            style={imageStyle}
          />
        )
        }
      </View>
    )
  }
}
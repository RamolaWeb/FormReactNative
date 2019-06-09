import React, {
  Component,
} from 'react'

import {
  Text,
  View,
} from 'react-native'

import {
  map,
} from 'lodash'

import PropTypes from 'prop-types'

import Field from '../Field'

import styles from './style'


export default class Form extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired, // Unique key to identifies the form
    onTextChanged: PropTypes.func.isRequired,
    formValue: PropTypes.array.isRequired, // The value each field in form
  }

  onUpdateText = (fieldKey, value) => {
    const {
      id,
      onTextChanged,
    } = this.props
    onTextChanged(id, fieldKey, value)
  }

  renderField = form => {
    const field =  map(form, ( data) => {
      const {
        id,
        label,
        value,
      } = data
      return (
        <Field
          id={id}
          label={label}
          onTextChanged={this.onUpdateText}
          inputText={value}
        />
      )
    })

    return field
  }

  render() {
    const {
      container,
      bodyContainer,
    } = styles
    const {
      id,
      formValue,
    } = this.props
    return (
      <View
        style={container}
      >
        <Text
          style={{
            padding: 10,
            fontSize: 15,
          }}
        >
          {
            `Form ${id}`
          }
        </Text>
        <View
          style={bodyContainer}
        >
          {this.renderField(formValue)}
        </View>
      </View>
    )
  }
}
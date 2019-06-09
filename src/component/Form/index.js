import React, {
  Componet,
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


export default class Form extends Componet {
  static propTypes = {
    key: PropTypes.string.isRequired, // Unique key to identifies the form
    onTextChanged: PropTypes.func.isRequired,
    formValue: PropTypes.object.isRequired, // The value each field in form
  }

  onUpdateText = (fieldKey, value) => {
    const {
      key,
      onTextChanged,
    } = this.props
    onTextChanged(key, fieldKey, value)
  }

  extractFieldValue = key => {
    const {
      formValue,
    } = this.props
    return formValue[[key]]
  }

  renderField = form => {
    const field =  map(form, ({ data }) => {
      const {
        key,
        label,
        value,
      } = data
      retrun (
        <Field
          key={key}
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
      key,
      formValue,
    } = this.props
    return (
      <View
        style={container}
      >
        <Text>
          {
            `Form ${key}`
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
import React, {
  Componet,
} from 'react'

import {
  Text,
  View,
} from 'react-native'

import PropTypes from 'prop-types'

import Field from '../Field'

import styles from './style'

import {
  FIELD_KEYS,
  FIELD_LABEL,
} from '../../constants'

export default class Form extends Componet {
  static propTypes = {
    key: PropTypes.string.isRequired, // Unique key to identifies the form
    label: PropTypes.string.isRequired,
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

  render() {
    const {
      container,
      bodyContainer,
    } = styles
    const {
      label,
    } = this.props
    const {
      FIELD_NAME,
      FIELD_EMAIL,
      FIELD_CONTACT,
      FIELD_WEBSITE,
      FIELD_DOB,
    } = FIELD_KEYS
    const {
      LABEL_NAME,
      LABEL_EMAIL,
      LABEL_CONTACT,
      LABEL_WEBSITE,
      LABEL_DOB,
    } = FIELD_LABEL
    return (
      <View
        style={container}
      >
        <Text>
          {
            label
          }
        </Text>
        <View
          style={bodyContainer}
        >
          <Field
            key={FIELD_NAME}
            label={LABEL_NAME}
            onTextChanged={this.onUpdateText}
            inputText={this.extractFieldValue(FIELD_NAME)}
          />
          <Field
            key={FIELD_EMAIL}
            label={LABEL_EMAIL}
            onTextChanged={this.onUpdateText}
            inputText={this.extractFieldValue(FIELD_EMAIL)}
          />
          <Field
            key={FIELD_CONTACT}
            label={LABEL_CONTACT}
            onTextChanged={this.onUpdateText}
            inputText={this.extractFieldValue(FIELD_CONTACT)}
          />
          <Field
            key={FIELD_WEBSITE}
            label={LABEL_WEBSITE}
            onTextChanged={this.onUpdateText}
            inputText={this.extractFieldValue(FIELD_WEBSITE)}
          />
          <Field
            key={FIELD_DOB}
            label={LABEL_DOB}
            onTextChanged={this.onUpdateText}
            inputText={this.extractFieldValue(FIELD_DOB)}
          />
        </View>
      </View>
    )
  }
}
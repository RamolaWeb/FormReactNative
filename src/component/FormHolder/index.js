import React, {
  Component,
} from 'react'

import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native'

import PropTyes from 'prop-types'

import Form from '../Form'
import styles from './style'

export default class FormHolder extends Component {
  static propTypes = {
    formData: PropTyes.array.isRequired,
    onUpdateText: PropTyes.func.isRequired,
    onAddForm: PropTyes.func.isRequired,
    onSubmit: PropTyes.func.isRequired,
  }

  renderItem = ({ item }) => {
    const {
      id,
      data,
    } = item

    const {
      onUpdateText
    } = this.props

    return (
      <Form
        id={id}
        formValue={data}
        onTextChanged={onUpdateText}
      />
    )
  }

  render() {
    const {
      onAddForm,
      formData,
      onSubmit,
    } = this.props

    const {
      container,
      headerStyle,
      submitButton,
    } = styles
    return (
      <View
        style={container}
      >
        <View
          style={headerStyle}
        >
          <Text
            style={{
              padding: 10,
              fontSize: 15,
            }}
          >
            Test
          </Text>
          <Text
            onPress={onAddForm}
            style={{
              fontSize: 15,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            +
          </Text>
        </View>
        <FlatList
          data={formData}
          renderItem={this.renderItem}
        />
        <TouchableWithoutFeedback
          onPress={onSubmit}
        >
          <View
            style={submitButton}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Submit
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

}
import React, {
  Component,
} from 'react'

import {
  View,
  Text,
  FlatList,
} from 'react-native'

import PropTyes from 'prop-types'

import Form from '../Form'
import styles from './style'

export default class FormHolder extends Component {
  static propTypes = {
    formData: PropTyes.array.isRequired,
    onUpdateText: PropTyes.func.isRequired,
    onAddForm: PropTyes.func.isRequired,
  }

  renderItem = ({item}) => {
    const {
      key,
      data,
    } = item

    const {
      onUpdateText
    } = this.props

    return (
      <Form
        key={key}
        formValue={data}
        onTextChanged={onUpdateText}
      />
    )
  }

  render() {
    const {
      onAddForm,
      formData,
    } = this.props

    const {
      container,
      headerStyle,
    } = styles
    return (
      <View
        style={container}
      >
        <View
          style={headerStyle}
        >
          <Text>
            Test
          </Text>
          <Text
            onPress={onAddForm}
          >
            +
          </Text>
          <FlatList
            data={formData}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }

}
import React, {
  Component,
} from 'react'

import {
	findIndex,
} from 'lodash'

import {
  FormHolder,
} from '../../component'

import {
	FIELD_DATA,
} from './constant'

import {
	deepClone,
	validateForm,
} from '../../utils'

export default class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      formData: [
        {
          id: 1,
          data: deepClone(FIELD_DATA),
        },
      ],
    }
	}

	onAddMoreClickListener = () => {
		const {
			count,
			formData,
		} = this.state

		const updatedCount = count + 1
		const newFormData = {
			id: updatedCount,
			data: deepClone(FIELD_DATA),
		}

		const updatedFormData = [
			...formData.slice(),
			newFormData,
		]

		this.setState({
			count: updatedCount,
			formData: updatedFormData,
		})
	}

	onUpdateText = (formKey, fieldKey, value) => {
		const {
			formData
		} = this.state
		const formIndex = findIndex(formData, {
			id: formKey,
		})

		const {
			data,
		} = formData[formIndex]
		const fieldIndex = findIndex(data, {
			id: fieldKey,
		})

		const updatedFieldData = {
			...data[fieldIndex],
			value
		}

		const updatedField = [
			...data.slice(0, fieldIndex),
			updatedFieldData,
			...data.slice(fieldIndex+1)
		]

		const updatedForm = {
			...formData[formIndex],
			data: updatedField,
		}

		const updatedFormData = [
			...formData.slice(0, formIndex),
			updatedForm,
			...formData.slice(formIndex+1)
		]

		this.setState({
			formData: updatedFormData
		})
	}

	onSubmitClickListener = () => {
		const {
			formData,
		} = this.state
		
		console.log(formData)

		const isValid = validateForm(formData)

	}
	
	render() {
		const {
			formData,
		} = this.state
		return (
			<FormHolder
				formData={formData}
				onAddForm={this.onAddMoreClickListener}
				onSubmit={() => this.onSubmitClickListener()}
				onUpdateText={this.onUpdateText}
			/>
		)
	}
}


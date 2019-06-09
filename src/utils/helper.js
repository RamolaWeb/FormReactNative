import {
  find,
  isEmpty,
} from 'lodash'
import Toast from 'react-native-simple-toast'

const deepClone = data => (
  JSON.parse(JSON.stringify(data))
)

const checkValidation = (validator, data) => {
  const regex = new RegExp(validator)
  console.log(validator, data)
  return regex.test(data.trim())
}

const getInvalidField = formData => {
  const invalidField = find(formData, item => {
    const {
      validator,
      value,
    } = item
    let isValid = true

    if (!isEmpty(validator))
    {
      isValid = isValid && (isEmpty(value.trim()) || !checkValidation(validator, value))
      console.log('is valid 1', isEmpty(value.trim()), checkValidation(validator, value))
    }

    else {
      isValid = isEmpty(value.trim())
    }

    console.log('is valid', isValid)
    return isValid

  })

  return invalidField
}

const validateForm = formData => {
  for (let item of formData) {
    const {
      data,
      id,
    } = item
    const invalidField = getInvalidField(data)
    console.log('field is ', invalidField)
    if (!isEmpty(invalidField)) {
      const {
        label,
      } = invalidField
  
      Toast.show(`${label} of Form ${id} is not valid`)
      return false
    }
  }

  return true
}


export {
  deepClone,
  validateForm,
}
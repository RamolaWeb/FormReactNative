import {
  FIELD_KEYS,
  FIELD_LABEL,
  FIELD_VALIDTOR,
} from '../../constants'

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

const {
  REGEX_NAME,
  REGEX_EMAIL,
  REGEX_CONTACT,
  REGEX_WEBSITE,
} = FIELD_VALIDTOR

export const FIELD_DATA = [
  {
    id: FIELD_NAME,
    label: LABEL_NAME,
    value: '',
    validator: REGEX_NAME,
  },
  {
    id: FIELD_EMAIL,
    label: LABEL_EMAIL,
    value: '',
    validator: REGEX_EMAIL,
  },
  {
    id: FIELD_CONTACT,
    label: LABEL_CONTACT,
    value: '',
    validator: REGEX_CONTACT,
  },
  {
    id: FIELD_WEBSITE,
    label: LABEL_WEBSITE,
    value: '',
    validator: REGEX_WEBSITE,
  },
  {
    id: FIELD_DOB,
    label: LABEL_DOB,
    value: '',
    validator: '',
  },
]
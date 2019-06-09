export const REQUIRED_ICON = require('../assets/asterisk.png')

export const FIELD_KEYS = {
  FIELD_NAME: 'name',
  FIELD_EMAIL: 'email',
  FIELD_CONTACT: 'contact',
  FIELD_WEBSITE: 'website',
  FIELD_DOB: 'dob',
}

export const FIELD_LABEL = {
  LABEL_NAME: 'Name',
  LABEL_EMAIL: 'Email',
  LABEL_CONTACT: 'Contact',
  LABEL_WEBSITE: 'Website',
  LABEL_DOB: 'Date of Birth',
}

export const FIELD_VALIDTOR = {
  REGEX_NAME: '^[A-Za-z]+$',
  REGEX_EMAIL: '^([a-zA-Z0-9_\\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$',
  REGEX_WEBSITE: '^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$',
  REGEX_CONTACT: '',
}
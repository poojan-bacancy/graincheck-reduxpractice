import strings from 'constants/strings'

const errorStrings = strings.loginScreen.errors

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/

export const required = (value) => value? undefined : errorStrings.require

export const email = value =>
    value && !value.match(emailRegex)
    ? errorStrings.invalidEmail
    : undefined

export const password = value => 
    value && !value.match(passwordRegex)
    ? errorStrings.invalidPassLength
    : undefined
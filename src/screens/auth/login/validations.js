import strings from 'constants/strings'

const errorStrings = strings.loginScreen.errors

export const required = (value) => value? undefined : errorStrings.require

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? errorStrings.invalidEmail
    : undefined

export const password = value => 
    value && value.length < 6
    ? errorStrings.invalidPassLength
    : undefined
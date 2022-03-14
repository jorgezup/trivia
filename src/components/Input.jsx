import { string } from 'prop-types'
import React from 'react'
import StyledInput from '../styles/elements/StyledInput'

const Input = (props) => {
  const { name, label } = props
  return (
    <label htmlFor={name}>
      {label}
      <StyledInput {...props} />
    </label>
  )
}

Input.propTypes = {
  label: string,
  name: string,
}.isRequired

export default Input

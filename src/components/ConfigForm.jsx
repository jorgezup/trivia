import { any, string, func } from 'prop-types'
import React from 'react'
import Select from './Select'
import Input from './Input'
import Button from './Button'
import { FaSave } from 'react-icons/fa'
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  TYPE_OPTIONS,
} from '../utils/constants'

import StyledConfigForm from '../styles/elements/StyledConfigForm'

const ConfigForm = ({
  amount,
  category,
  difficulty,
  type,
  handleChange,
  handleSubmit,
}) => (
  <StyledConfigForm onSubmit={handleSubmit}>
    <Input
      type='number'
      label='Amount'
      name='amount'
      onChange={handleChange}
      value={amount}
    />
    <Select
      id='category'
      label='Category'
      name='category'
      options={CATEGORY_OPTIONS}
      onChange={handleChange}
      value={category}
    />
    <Select
      id='difficulty'
      label='Difficulty'
      name='difficulty'
      options={DIFFICULTY_OPTIONS}
      onChange={handleChange}
      value={difficulty}
    />
    <Select
      id='type'
      label='Type'
      name='type'
      options={TYPE_OPTIONS}
      onChange={handleChange}
      value={type}
    />
    <Button type='submit' value={<FaSave />}>
      Save
    </Button>
  </StyledConfigForm>
)

ConfigForm.propTypes = {
  amount: any,
  category: string,
  difficulty: string,
  handleChange: func,
  handleSubmit: func,
  type: string,
}.isRequired

export default ConfigForm

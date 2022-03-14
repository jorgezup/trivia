import { string, array } from 'prop-types';
import React from 'react';
import StyledSelect from '../styles/elements/StyledSelect';

const Select = (props) => {
  const { label, name, options } = props;
  return (
    <label htmlFor={ name }>
      {label}
      <StyledSelect { ...props }>
        {options.map((option) => {
          if (typeof option === 'object') {
            return (
              <option value={ option.value } key={ option.key }>
                {option.key}
              </option>
            );
          }
          return (
            <option value={ option } key={ option }>
              {option}
            </option>
          );
        })}
      </StyledSelect>
    </label>
  );
};

Select.propTypes = {
  label: string,
  name: string,
  options: array,
}.isRequired;

export default Select;

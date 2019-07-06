import React from 'react'
import { StyledCurrencyValue, StyledValue, StyledCurrency } from './currency-value.style';

const CurrencyValue = ({ currency, value }) => {
  value = value.toFixed(2)

  return (
    <StyledCurrencyValue> 
      <StyledCurrency>{currency}</StyledCurrency> 
      <StyledValue>
        {value}
      </StyledValue>
    </StyledCurrencyValue>
  )
}

export default CurrencyValue
import React from 'react'
import { StyledCurrencyValue, StyledValue, StyledCurrency } from './currency-value.style';

const CurrencyValue = ({ currency, value }) => {
  value = value.toFixed(2)

  return (
    <StyledCurrencyValue> 
      <StyledValue>{value}</StyledValue>
      <StyledCurrency>{currency}</StyledCurrency> 
    </StyledCurrencyValue>
  )
}

export default CurrencyValue
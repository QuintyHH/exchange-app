import React from 'react'
import axios from 'axios'
import { StyledCurrencyValue, StyledValue, StyledCurrency, StyledButton } from './currency-value.style';

const CurrencyValue = ({ currency, value, selectedDate }) => {
  value = value.toFixed(2)

  const historyAPI = (baseHistoryCurrency) => {
    const calcDate = new Date(selectedDate)
    const spanDate = (new Date(calcDate.setMonth(calcDate.getMonth() - 12)).toISOString()).slice(0,10)
    baseHistoryCurrency && axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${spanDate}&end_at=${selectedDate}&base=${baseHistoryCurrency}`)
    .then(({ data }) => {
      renderTable(data)
    })
  }

  const renderTable = (data) => {
    console.log(data)
  }

  const handleBaseHistory = (e) => {
    const { value } = e.target 
    historyAPI(value)
  }

  return (
    <StyledCurrencyValue> 
      <StyledCurrency>{currency}</StyledCurrency> 
      <StyledValue>
        {value}
      </StyledValue>
        <StyledButton>
          <button value={currency} onClick={handleBaseHistory}>History</button>
        </StyledButton>
    </StyledCurrencyValue>
  )
}

export default CurrencyValue
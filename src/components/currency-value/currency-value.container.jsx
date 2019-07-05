import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { StyledCurrencyValue, StyledValue, StyledCurrency, StyledButton } from './currency-value.style';

const CurrencyValue = ({ currency, value, selectedDate }) => {
  value = value.toFixed(2)
  
  const [baseHistoryCurrency, setBaseHistoryCurrency] = useState(currency)

  const historyAPI = () => {
    const calcDate = new Date(selectedDate)
    const spanDate = (new Date(calcDate.setMonth(calcDate.getMonth() - 12)).toISOString()).slice(0,10)
    baseHistoryCurrency && axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${spanDate}&end_at=${selectedDate}&base=${baseHistoryCurrency}`)
    .then(({ data }) => {
      console.log(data)
      })
  }

  const handleBaseHistory = (e) => {
    const { value } = e.target 
    setBaseHistoryCurrency(value)
    historyAPI()
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
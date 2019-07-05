import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { StyledCurrencyValue, StyledValue, StyledCurrency, StyledButton } from './currency-value.style';

const CurrencyValue = ({ currency, value, selectedDate }) => {
  value = value.toFixed(2)
  
  const [baseCurrency, setBaseCurrency] = useState('')

  useEffect(() => {
    historyAPI()
    console.log(selectedDate)
  }, [baseCurrency])

  const historyAPI = () => {
    const calcDate = new Date(selectedDate)
    const endDate = calcDate.toISOString().slice(0,10)
    const spanDate = (new Date(calcDate.setMonth(calcDate.getMonth() - 12)).toISOString()).slice(0,10)
    baseCurrency && axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${spanDate}&end_at=${endDate}&base=${baseCurrency}`)
    .then(({ data }) => {
      console.log(data)
      })
  }

  const handleBase = (e) => {
    const { value } = e.target 
    setBaseCurrency(value)
  }

  return (
    <StyledCurrencyValue> 
      <StyledCurrency>{currency}</StyledCurrency> 
      <StyledValue>
        {value}
      </StyledValue>
        <StyledButton>
          <button value={currency} onClick={handleBase}>History</button>
        </StyledButton>
    </StyledCurrencyValue>
  )
}

export default CurrencyValue
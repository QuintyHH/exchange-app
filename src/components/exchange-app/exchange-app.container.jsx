import React, { useEffect } from 'react'
import { useReducer } from 'reinspect'
import axios from 'axios'
import { 
  currencyListReducer,
  currencyState,
  today 
} from './exchange-app.reducer'
import { 
  updateDateAction,
  updateBaseAction,
  initCurrencyListAction, 
  currencyValueListAction
} from './exchange-app.action'
import CurrencyValue from '../currency-value';
import { StyledExchangeApp } from './exchange-app.style';

const ExchangeApp = () => {

  const [{ 
    currencyList,
    base,
    selectedDate,
    currencyValueList
  } = currencyState, dispatch ] = useReducer(currencyListReducer, currencyState )

  const getBaseList = (data) => {
    // const firstKey = Object.keys(data.rates)[0]
    const newCurrencyList = Object.keys(data.rates)
    dispatch(initCurrencyListAction(newCurrencyList))
  }

  const updateCurrencyList = ({ rates }) => {
    dispatch(currencyValueListAction(rates))
  }

  useEffect(() => {
    selectedDate && axios
    // .get(`https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=${base}`)
    .get(`https://api.exchangeratesapi.io/${selectedDate}?base=${base}`)
    .then(({ data }) => {
         !currencyList.length && getBaseList(data)
         updateCurrencyList(data)
      })
  }, [base, selectedDate])

  const handleBaseCurrencyChange = (e) => {
    const { value } = e.target
    dispatch(updateBaseAction(value))
  }

  const handleDateChange = (e) => {
    const { value } = e.target 
    dispatch(updateDateAction(value))
    // console.log(value)
  }

  const renderCurrencyList = () => currencyList.map((currency) => 
    <option 
      key={currency}
      selected={currency === base}
      value={currency}>
      {currency}
    </option>
  )

  const renderCurrencyValueList = () => {
    const keysList = Object.keys(currencyValueList)
    return keysList.map((key) => {
      const currencyValuePropList = {
        currency: key,
        value: currencyValueList[key]
      }
      return <CurrencyValue { ...currencyValuePropList } />
    })
  }

  return (
    <StyledExchangeApp>
      <div><h1>Hello</h1></div>
      <input
        type="date"
        onChange={handleDateChange}
        defaultValue={today}
        max={today}/>
      <select onChange={handleBaseCurrencyChange}>
        {renderCurrencyList()}
      </select>
      <div style={{columnCount: 3}}>{renderCurrencyValueList()}</div>
    </StyledExchangeApp>
  )
}

export default ExchangeApp
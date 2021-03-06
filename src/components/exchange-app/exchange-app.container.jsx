import React, { useEffect, useReducer } from 'react'
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
  currencyValueListAction,
} from './exchange-app.action'
import CurrencyValue from '../currency-value';
import HistoryList from '../history-list';
import { StyledExchangeApp, StyledTitle, StyledPicker, StyledSelect } from './exchange-app.style';

const ExchangeApp = () => {

  const [{ 
    currencyList,
    base,
    selectedDate,
    currencyValueList
  } = currencyState, dispatch ] = useReducer(currencyListReducer, currencyState )

  const getBaseList = (data) => {
    const newCurrencyList = Object.keys(data.rates)
    dispatch(initCurrencyListAction(newCurrencyList))
  }

  const updateCurrencyList = ({ rates }) => {
    dispatch(currencyValueListAction(rates))
  }

  useEffect(() => {
    selectedDate && axios
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
  }

  const renderCurrencyList = () => currencyList.map((currency) => 
    <option 
      key={currency}
      value={currency}
      selected={currency === base}>
      {currency}
    </option>
  )

  const renderCurrencyValueList = (currencyValueList) => {
    const keysList = Object.keys(currencyValueList)
    return keysList.map((key) => {
      const currencyValuePropList = {
        currency: key,
        value: currencyValueList[key],
      }
      return <CurrencyValue { ...currencyValuePropList } />
    })
  }

  const renderHistoryTable = (base, selectedDate) => {
    const historyPropList = {
      currency: base,
      date: selectedDate
    }
    return <HistoryList {...historyPropList} />
  }

  return (
    <StyledExchangeApp>
      <StyledTitle>exchangeRate</StyledTitle>
      <StyledPicker>
        <input
          type="date"
          onChange={handleDateChange}
          defaultValue={today}
          max={today}/>
        <StyledSelect>
          <select 
            style={{padding:4}} 
            onChange={handleBaseCurrencyChange}>
            {renderCurrencyList()}
          </select>
        </StyledSelect>
      </StyledPicker>
      <div style={{columnCount: 3, margin: 5}}>{renderCurrencyValueList(currencyValueList)}</div>
      <div>{renderHistoryTable(base, selectedDate)}</div>
    </StyledExchangeApp>
  )
}

export default ExchangeApp
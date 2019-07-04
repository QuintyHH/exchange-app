import { 
  CURRENCY_LIST_INIT,
  CURRENCY_LIST_UPDATE_BASE,
  CURRENCY_LIST_UPDATE_DATE, 
  CURRENCY_VALUE_LIST_UPDATE
} from './exchange-app.constant'

export const updateDateAction = (date) => ({
  type: CURRENCY_LIST_UPDATE_DATE,
  date
})

export const updateBaseAction = (base) => ({
  type: CURRENCY_LIST_UPDATE_BASE,
  base
})

export const initCurrencyListAction = (newCurrencyList) => ({
  type: CURRENCY_LIST_INIT,
  newCurrencyList
})

export const currencyValueListAction = (currencyValueList) => ({
  type: CURRENCY_VALUE_LIST_UPDATE,
  currencyValueList
})

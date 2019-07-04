import { 
  CURRENCY_LIST_INIT,
  CURRENCY_LIST_UPDATE_BASE,
  CURRENCY_LIST_UPDATE_DATE,
  CURRENCY_VALUE_LIST_UPDATE
} from './exchange-app.constant'

export const today = new Date().toISOString().slice(0, 10)
export const currencyState = {
  currencyList: [],
  base: 'GBP',
  selectedDate: today,
  currencyValueList: {}
}

export const currencyListReducer = (state, action) => {
  const newState = { ...state }
  switch(action.type) {
    case CURRENCY_LIST_INIT:
      newState.currencyList = [...action.newCurrencyList]
      break
    case CURRENCY_LIST_UPDATE_BASE:
      newState.base = action.base
      break
    case CURRENCY_LIST_UPDATE_DATE:
      newState.selectedDate = action.date
      break
    case CURRENCY_VALUE_LIST_UPDATE:
      newState.currencyValueList = action.currencyValueList
      break
    default:
      return newState
  }
  return newState
}

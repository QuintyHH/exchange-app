import { updateBaseAction, initCurrencyListAction, updateDateAction } from '../exchange-app.action'
import { CURRENCY_LIST_UPDATE_BASE, CURRENCY_LIST_INIT, CURRENCY_LIST_UPDATE_DATE } from '../exchange-app.constant';
import { currencyListReducer } from '../exchange-app.reducer';

describe("@ExchangeApp", () => {
  it("should create an action to update the base", () => {
    const testCurrency ="RON"
    const expected = {
      base: "RON",
      type: CURRENCY_LIST_UPDATE_BASE
    }
    const result = updateBaseAction(testCurrency)
    expect(result).toEqual(expected)
  })

  it("should create an action to update the selected date", () => {
    const testDate = "2019-03-03"
    const expected = {
      type: CURRENCY_LIST_UPDATE_DATE,
      date: testDate
    }
    const result = updateDateAction(testDate)
    expect(result).toEqual(expected)
  })

  it("should create an action that initializes the currency list", () => {
    const testArray = ["RON","GBP"]
    const expected = {
      type: CURRENCY_LIST_INIT,
      newCurrencyList: testArray
    }
    const result = initCurrencyListAction(testArray)
    expect(result).toEqual(expected)
  })

  it("should initialize the currency list", () => {
    const testCurrency = ["RON","GBP"]
    const expected = {
      base: "USD",
      currencyList: testCurrency,
    }
    const action = initCurrencyListAction(testCurrency)
    const result = currencyListReducer( { 
      base:"USD",
      currencyList: [] 
    } , action)
    expect(result).toEqual(expected)
  }) 

  it("should update the base currency", () => {
    const testCurrency = "USD"
    const action = updateBaseAction(testCurrency)
    const expected = {
      base: testCurrency,
      currencyList: []
    }
    const result = currencyListReducer( {
      base: 'GBP',
      currencyList: []
    }, action)
    expect(result).toEqual(expected)
  })

  it("should update the selected date", () => {
    const testDate = "2019-03-03"
    const action = updateDateAction(testDate)
    const expected = {
      selectedDate: testDate,
      currencyList: []
    }
    const result = currencyListReducer( {
      selectedDate: "2019-03-03",
      currencyList: []
    }, action)
    expect(result).toEqual(expected)
  })
})

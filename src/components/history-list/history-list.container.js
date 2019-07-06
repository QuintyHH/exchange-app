import React, {useState, useEffect }from 'react'
import axios from 'axios'

const HistoryList = ({ currency, date }) => {
  
  const [spanDate, setSpanDate] = useState()
  const [historyData, setHistoryData] = useState({})
  const [currencyList, setCurrencyList] = useState([])
  const [historyList, setHistoryList] = useState([])

  const format = (number) =>{
   return number = number.toFixed(2)
  }

  useEffect(() => {
    const calcDate = new Date(date)
    const spanDate = (new Date(calcDate.setMonth(calcDate.getMonth() - 12)).toISOString()).slice(0,10)
    currency && date && axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${spanDate}&end_at=${date}&base=${currency}`)
    .then(({ data }) => {
      setSpanDate(spanDate)
      setHistoryData(data.rates)
      setCurrencyList(Object.keys(data.rates[Object.keys(data.rates)[0]]))
      setHistoryList(Object.keys(data.rates))
     })
  }, [date, currency])

  // useEffect(() => {
  //      console.log('test',currencyList, historyList)
  // }, [historyData])

  return (
    <div>
      <header>Displaying history for {currency} from {spanDate} to {date}</header>
      <section>
          <table border="1">
            <thead>
              <tr>
              <td>Date</td>
                 {currencyList.map((rate, key) => (
                  <td key={key}>{rate}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {historyList.map(historyKey => (
                <tr key={historyKey}>
                  <td>{historyKey}</td>
                  {currencyList.map((rate, key) => (
                    <td key={key}>
                      {historyData &&
                        historyData[historyKey] &&
                        format(historyData[historyKey][rate])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </div>
  )
}

export default HistoryList
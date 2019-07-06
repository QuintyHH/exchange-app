import React from 'react'
import axios from 'axios'

const HistoryList = ({ currency, date }) => {
    const calcDate = new Date(date)
    const spanDate = (new Date(calcDate.setMonth(calcDate.getMonth() - 12)).toISOString()).slice(0,10)
    currency && axios
    .get(`https://api.exchangeratesapi.io/history?start_at=${spanDate}&end_at=${date}&base=${currency}`)
    .then(({ data }) => {
      console.log("history",currency, date)
    })
  
  return (
    <div>
      <header>Displaying history for {currency} from {spanDate} to {date}</header>
    </div>
  )
}

export default HistoryList
import React from 'react'
import { render } from 'react-dom'
import ExchangeApp from './components/exchange-app'
import  './index.css'

const reactRendersHere = document.querySelector("#react-renders-here")

render(<ExchangeApp/>, reactRendersHere )
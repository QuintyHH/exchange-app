import React from 'react'
import { render } from 'react-dom'
import ExchangeApp from './components/exchange-app'
import { StateInspector } from 'reinspect'

const reactRendersHere = document.querySelector("#react-renders-here")

render( 
<StateInspector name="ExchangeApp">
  <ExchangeApp/>
</StateInspector>,
reactRendersHere )
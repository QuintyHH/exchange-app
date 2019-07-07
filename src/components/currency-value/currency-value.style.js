import styled from 'styled-components'

export const StyledCurrencyValue = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 6px;
  min-width: 200px;
  transition: 0.25s;

  &:hover {
    transform: scale(1.03)
  }
`
export const StyledCurrency = styled.div`
  box-sizing: border-box;
  background-color: #F5D4A3;
  min-width: 50px;
  color: #E4A444;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

export const StyledValue = styled.div`
  font-size: 15px;
  flex-grow: 1;
  padding: 5px;
  margin-right: 10px;
  text-align: right;
  justify-content: center;
  color: white;
  height: 100%;
  background-color: #E4A444;
`

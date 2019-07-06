import styled from 'styled-components'

export const StyledCurrencyValue = styled.div`
  display: flex;
  background-color: #036;
  font-size: 12px;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius : 10px;
  margin-bottom: 6px;
  min-width: 200px;
  transition: 0.25s;

  &:hover {
    transform: scale(1.03)
  }
`
export const StyledCurrency = styled.div`
  background-color: white;
  min-width: 30px;
  border-radius: 10px;
  padding: 5px;
  font-size: 15px;
  text-align: center;
`

export const StyledList = styled.div`
  background-color: white;
  width: 100%
  border-radius: 10px;
  padding: 5px;
  font-size: 15px;
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
`

export const StyledButton = styled.div`
  padding: 5px;
  text-align: right;
  justify-content: center;
`

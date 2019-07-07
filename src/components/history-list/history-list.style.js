import styled from 'styled-components'

export const StyledHistoryList = styled.table`
  text-align: center;
    color:black;
    font-weight:bold;
  
  header {
    font-size: 20px;
    color: #E4A444;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 5px;
    border: 2px solid #E4A444
  }

  tr:nth-child(odd) {
    background-color: #E4A444;
    color:white;
    &:hover {
      color:#59554F;
    }
  }
  
  tr:nth-child(even) {
    background-color: #F5D4A3;
    color:#E4A444;
    &:hover {
      color:#59554F;
    }
  }
`

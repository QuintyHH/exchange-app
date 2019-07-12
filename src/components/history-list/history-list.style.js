import styled from 'styled-components'

export const StyledHistoryList = styled.table`
  text-align: center;
  color:black;
  font-size: 16px;
 
  header {
    font-weight:bold;
    font-size: 20px;
    color: #59554F;
    text-align: left;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid #E4A444;
    background-color: #F5D4A3;
  }

  td {
    padding: 0 5px;
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

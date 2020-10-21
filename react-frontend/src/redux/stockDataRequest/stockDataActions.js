  
import axios from 'axios'
import {
  FETCH_STOCK_DATA_REQUEST,
  FETCH_STOCK_DATA_SUCCESS,
  FETCH_STOCK_DATA_FAILURE,
  //REQUEST_API_CALL_INFO
} from './stockDataTypes'


// export const requestAPIstockData = (n) => {
//   return {
//     type: REQUEST_API_CALL_INFO,
//     payload: n
//   }
// }


// https://redux.js.org/advanced/async-actions
export function fetchStockData(apiString) {
  return function (dispatch) {
    axios({
      method: 'get',
      url: "/get_stock_data/"+apiString,
    })
      .then(response => {
        const stockData = response.data 
        dispatch(fetchStockDataSuccess(stockData))
      })
      .catch(error => {
        dispatch(fetchStockDataFailure(error.message))
      })
  }
}

export const fetchStockDataRequest = () => {
  return {
    type: FETCH_STOCK_DATA_REQUEST,
  }
}

export const fetchStockDataSuccess = data => {
  return {
    type: FETCH_STOCK_DATA_SUCCESS,
    payload: data
  }
}

export const fetchStockDataFailure = error => {
  return {
    type: FETCH_STOCK_DATA_FAILURE,
    payload: error
  }
}
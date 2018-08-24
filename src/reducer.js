import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import storeReducer from 'components/seller/StoreReducer'
import OwnerReducer from 'reducers/OwnerReducer'
import CommonReducer from 'reducers/CommonReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  owner: OwnerReducer,
  common: CommonReducer,
  web3: web3Reducer,
  store: storeReducer
})

export default reducer

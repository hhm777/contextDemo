import reducer from "./reducers";
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducer);

const store = createStore(myPersistReducer, applyMiddleware(reduxThunk))

export const persistor = persistStore(store)
export default store;

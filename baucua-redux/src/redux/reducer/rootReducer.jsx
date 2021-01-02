import {combineReducers} from 'redux';
import BaiTapGameBauCuaReducer from './BaiTapGamBauCuaReducer'

//Store tổng
export const rootReducer = combineReducers({
    //Nơi chứa các reducer cho nghiệp vụ (store con)
    BaiTapGameBauCuaReducer,
});
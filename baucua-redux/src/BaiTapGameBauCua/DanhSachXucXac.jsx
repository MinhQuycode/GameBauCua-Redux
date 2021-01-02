import React from 'react'
import XucXac from './XucXac'
import {useSelector,useDispatch} from 'react-redux'


export default function DanhSachXucXac(props) {
    const disPacth = useDispatch();
    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac)
    const renderMangXucXac = () =>{
        return mangXucXac.map((item,index)=>{
            return <div key={index} className="xucxac mt-2"><XucXac xucxac={item}/></div>
        })
    }
    return (
        <div className="ds__xucxax">
            {renderMangXucXac()}
           <button onClick={()=>{
               disPacth({
                   type : 'PLAY_GAME',
               })
           }} className="btn btn-danger mt-5">XỐC</button>
        </div>
    )
}

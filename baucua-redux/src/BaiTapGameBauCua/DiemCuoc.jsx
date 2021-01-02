import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Diemcuoc(props) {
    const dispatch = useDispatch();
    const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem)
    return (
        <div className="text-center diem__cuoc">
            <h1>GAME BÀU CUA</h1>
            <div className="tien__thuong">
                <p className="pt-2">Tiền Thưởng : {tongDiem.toLocaleString()} điểm</p>
            </div>
            <div>
                <button onClick={()=>{
                    dispatch({
                        type:'CHOI_LAI',
                    })
                }} className="btn btn-danger mt-2">Chơi lại</button>
            </div>
        </div>
    )
}

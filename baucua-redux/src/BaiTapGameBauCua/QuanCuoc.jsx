import React from 'react'
import {useDispatch} from 'react-redux'
import {useSpring, animated} from 'react-spring'

export default function QuanCuoc(props) {
    const [propUseSpring,set] = useSpring(()=>{
       return{
        to:{scale:1.10}, from : {scale:1}, reset:true
       } 
    });
    const [propUseSpring1,set1] = useSpring(()=>{
        return{
         to:{scale:1.10}, from : {scale:1}, reset:true
        } 
     });

    const dispatch = useDispatch();
    const {quanCuoc} = props;
    return (
        <div className="mt-1">
            <img className="img-fluid" src={quanCuoc.hinhAnh} width="175px"/>
            <div className="cuoc text-center">
                <p>Cược : <animated.button style={{transform:propUseSpring.scale.interpolate(scale=>`scale(${scale})`)}} className="btn btn-info" onClick={()=>{
                  set({scale:1})
                  set({scale:1.10})

                  dispatch({
                        type :'DAT_CUOC',
                        quanCuoc,
                        tangGiam : true
                    })
                }}>+</animated.button>
                <span> {quanCuoc.diemCuoc} </span>
                <animated.button style={{transform:propUseSpring1.scale.interpolate(scale=>`scale(${scale})`)}} className="btn btn-info" onClick={()=>{
                     set1({scale:1})
                     set1({scale:1.10})
                    dispatch({
                        type :'DAT_CUOC',
                        quanCuoc,
                        tangGiam : false
                    })
                }}>-</animated.button></p>
            </div>
        </div>
    )
}

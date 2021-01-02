import React from 'react'
import {useSpring,animated } from 'react-spring'

export default function XucXac(props) {
    const [propsDice,set] = useSpring(()=> ({
        to: {
            xyz:[360,360,360]
        },
        from :{
            xyz:[0,0,0]
        },
        cofig:{
            duration:1000
        },
        reset :true,
    }))
    set({xyz:[360,360,360]})
    const {xucxac} = props;
    return (
        <animated.div style={{transform:propsDice.xyz.interpolate((x,y,z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)}}>
            <img src={xucxac.hinhAnh} width="60px"/>
        </animated.div>
    )
}

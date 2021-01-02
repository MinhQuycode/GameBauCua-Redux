import React from 'react';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import DiemCuoc from './DiemCuoc';
import './style.css';

export default function BaiTapGameBauCua() {
    return (
        <div id='Bau__Cua'>
            <div className="container">
            <div className="row w-100 justify-content-center">
                <DiemCuoc/>
            </div>
            <div className="row">
                <div className="col-7">
                    <DanhSachCuoc/>
                </div>
                <div className="col-5">
                    <DanhSachXucXac/>
                </div>
            </div>
            </div>
        </div>
    )
}


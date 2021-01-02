import QuanCuoc from "../../BaiTapGameBauCua/QuanCuoc";

const initialState = {
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
  ],
  tongDiem: 500,
  mangXucXac: [
    { ma: "ca", hinhAnh: "./img/ca.png" },
    { ma: "ga", hinhAnh: "./img/ga.png" },
    { ma: "nai", hinhAnh: "./img/nai.png" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC':{
      //Tìm trong danh sách cuoc 
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
      if(index!== -1){
        if(action.tangGiam ===true && state.tongDiem > 0){
          danhSachCuocUpdate[index].diemCuoc += 100;
          state.tongDiem -= 100;
        } else {
          if(action.tangGiam === false && danhSachCuocUpdate[index].diemCuoc > 0){
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return{...state}
    }

    case 'PLAY_GAME':{
      // console.log(action)
      const mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      //Xử lý tăng điểm thưởng
      mangXucXacNgauNhien.forEach((xucXacNN,index)=>{
        let indexDsc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
        if(index !== -1){
          state.tongDiem += state.danhSachCuoc[indexDsc].diemCuoc;
        }
      })
      //Xử lý hoàn tiền 
      state.danhSachCuoc.forEach((qc,index)=>{
        let indexXXNN = mangXucXacNgauNhien.findIndex(xxnn=> xxnn.ma === qc.ma);
        if(indexXXNN !== -1){
          state.tongDiem += qc.diemCuoc;
        }
      })
      //Xử lý làm mới
      state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
       return{...qc,diemCuoc:0}
      })
        return{...state}
    }
    case 'CHOI_LAI':{
      state.tongDiem = 500;
      state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
        return{...qc,diemCuoc:0}
       })
         return{...state}
    }
    default:
      return { ...state };
  }
};

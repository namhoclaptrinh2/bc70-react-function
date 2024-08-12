import React, { useState } from "react";
import SanPham from "./SanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";
import GioHang from "./GioHang";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/src/assets/img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/src/assets/img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/src/assets/img/applephone.jpg",
  },
];

const DanhSachSanPham = () => {
  const [spChiTiet, setSpChiTiet] = useState({
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  });

  let [gioHang, setGioHang] = useState([
    // { "maSP": 2, "tenSP": "Meizu 16Xs", "giaBan": 7600000, "hinhAnh": "./src/assets/img/meizuphone.jpg",soLuong:2 },
    // { "maSP": 2, "tenSP": "Meizu 16Xs", "giaBan": 7600000, "hinhAnh": "./src/assets/img/meizuphone.jpg",soLuong:2 },
  ]);
  //state đặt ở đâu thì hàm xử lý
  const themGioHang = (spClick) => {
    //Tạo ra sản phẩm có số lượng:
    const spGioHang = { ...spClick, soLuong: 1 };
    //Khi click vào themGioHang => Có 2 trường hợp
    /*
      +th1: Sản phẩm đã có trong giở hàng -> Lấy ra và tăng số lượng
      +th2: Sản phẩm chưa tồn tại trong giỏ hàng -> thêm vào mảng giỏ hàng

     */
    const sp = gioHang.find(item => item.maSP === spGioHang.maSP)
    if(sp){
      sp.soLuong +=1;
    }else{
      gioHang = [...gioHang,spGioHang];
    }
    //Xử lý setState tại hàm này
    // const gioHangNew = [...gioHang, spGioHang];

    //Cập nhật lại giỏ hàng
    let gioHangUpdate=[...gioHang];
    setGioHang(gioHangUpdate);
  };
  const xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    //Xử lý xóa
    let gioHangUpdate = [...gioHang.filter(item=>item.maSP !== maSPClick)]

    //setState
    setGioHang(gioHangUpdate);
 

  }
  // let tangGiamSoLuong = (maSPClick,soLuong) => { //maSp, 1 hoặc -1
  //   let tangSoLuong =gioHang.find(item => item.maSP === maSPClick);
  //   if(tangSoLuong){
  //     tangSoLuong.soLuong +=1;
  //   }else{
  //     gioHang = [...gioHang,soLuong]
  //   }
  //   let capNhatSL = [...gioHang]
  //   setGioHang(capNhatSL)
  // }
  const tangGiamSoLuong = (maSPClick,soLuong) => { // maSP , 1 hoặc -1
//Thay đổi số lượng (tìm ra và + hoặc - số lượng)
console.log(maSPClick,soLuong);
let sp = gioHang.find(item => item.maSP === maSPClick);
if(sp){
    sp.soLuong += soLuong;
    if(sp.soLuong == 0) { //nếu số lượng == 0 thì gọi lại logic setState xoaGioHang
      xoaGioHang(sp.maSP)
      return;
  }
};
//setState
let gioHangUpdate = [...gioHang];
setGioHang(gioHangUpdate)
const thayDoiSoLuong = (maSPClick,soLuong) => { // maSP , 1 hoặc -1
  //Thay đổi số lượng (tìm ra và + hoặc - số lượng)
  console.log(maSPClick,soLuong);
  let sp = gioHang.find(item => item.maSP === maSPClick);
  if(sp){
     sp.soLuong = soLuong;
  };
  //setState
  let gioHangUpdate = [...gioHang];
  setGioHang(gioHangUpdate)
}
}
  return (
    <div className="container">
      <h3 className="text-center">Danh sách sản phẩm</h3>
      <GioHang gioHang={gioHang} xoaGioHang={xoaGioHang} tangGiamSoLuong={tangGiamSoLuong} thayDoiSoLuong={thayDoiSoLuong}></GioHang> 
      <div className="row">
        {data.map((sp) => {
          return (
            <div className="col-4" key={sp.data}>
              <SanPham
                spItem={sp}
                handleChangeState={setSpChiTiet}
                themGioHang={themGioHang}
              ></SanPham>
            </div>
          );
        })}
        {/* <div className="col-4">
          <SanPham></SanPham>
        </div>
        <div className="col-4">
          <SanPham></SanPham>
        </div>
        <div className="col-4">
          <SanPham></SanPham>
        </div> */}
      </div>
      <h3 className="mt-4"></h3>
      <SanPhamChiTiet spChiTiet={spChiTiet}></SanPhamChiTiet>
    </div>
  );
};

export default DanhSachSanPham;

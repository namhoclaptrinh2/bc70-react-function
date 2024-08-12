import React from 'react'

const GioHang = (props) => {
    const {gioHang,tangGiamSoLuong} = props;

    const tinhTongTien = () => {
        let tt = 0;
        for (let item of gioHang){
          tt = tt + item.soLuong *item.giaBan;
        }
        return  tt.toLocaleString();
    }
  return (
    <div className='container'>
    <h3>Giỏ hàng ({gioHang.length} - Tổng tiền : {tinhTongTien()})</h3>
    <table className='table'>
        <thead>
            <tr>
                <th>Mã SP</th>
                <th>Hình ảnh</th>
                <th>Tên SP</th>
                <th>Giá bán</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        
            {gioHang.map((itemGioHang)=>{
                return <tr key={itemGioHang.maSP}>
                <th>{itemGioHang.maSP}</th>
                <th><img src={itemGioHang.hinhAnh} width={50} alt="..." /></th>
                <th>{itemGioHang.tenSP}</th>
                <th>{itemGioHang.giaBan.toLocaleString()}</th>
                <th>
                {/* <button className='btn btn-primary mx-2' onClick={() =>{
                    props.tangSoLuong(itemGioHang.maSP);
                }}>+</button> */}
                  <button className='btn btn-primary mx-2' onClick={() =>{
                    tangGiamSoLuong(itemGioHang.maSP,1);
                }}>+</button>
                {itemGioHang.soLuong}

                 <button className='btn btn-primary mx-2' onClick={() =>{
                    tangGiamSoLuong(itemGioHang.maSP,-1);
                }}>-</button>
                </th>
                <th>{(itemGioHang.soLuong * itemGioHang.giaBan).toLocaleString()}</th>
                
                <th></th>
                <th>
                    <button className="btn btn-danger me-2" onClick={(()=>{
                        props.xoaGioHang(itemGioHang.maSP,-1);
                    })}>Xóa</button>
                </th>
            </tr>
            })}
            
        </tbody>
    </table>
</div>
  )
}

export default GioHang
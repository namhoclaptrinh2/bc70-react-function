import React from 'react'


/*
    So sánh giữa state và props:
    + state và props đều chứa các giá trị binding lên giao diện
    + state chứa các giá trị có thể thay đổi (thông qua phương thức setState)
    +props thì chứa các giá trị nhận từ comonent cha truyền vào (<Component propsname="gia_tri"/>) và không thể gán gái trị

*/
const CartProduct = (props) => { //props= {tenSanPham: ''}
    // props : đại diện cho các giá trị nhận vào từ propsNamecaur component <Component propsName="">
    //propss không thể gán lại giá trị (readonly)
  return (
<div className="card">
            <img src="https://picsum.photos/200/200" alt="..." />
            <div className="card-body">
                <h3>{props.tenSanPham}</h3>
                <p>Gía : {props.gia} đ</p>
                <button className='btn btn-dark'>Mua hàng</button>
            </div>
        </div>
  )
}

export default CartProduct
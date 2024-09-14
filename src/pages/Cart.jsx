import React from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantityProductAction } from '../redux/reducers/cartReducer';



const Cart = () => {
  //selector: lấy dữ liệu về
  const cartStore =useSelector(state=>state.cartSliceReducer.cart);
  console.log(cartStore);
 //dispatch: gửi dữ liệu lên redux (handleEvent)
 const dispatch= useDispatch()
  const columns = [
    {
      title: 'id',
      dataIndex:'id'
    },
    {
      title: 'image',
      dataIndex:'image',
      render:(value,record) =>{
        return <img src={record.image} width={50} alt='...'></img>
      }
    },
    {
      title: 'name',
      dataIndex:'name'
    },
    {
      title: 'quantity',
      dataIndex:'quantity',
      render: (value,record) => {
        return <>
          <button className={'btn btn-dark me-2'} onClick={()=>{
            //Tạo ra action bằng hàm action được export từ reducer (rxslice)
            const payload = {
              id:record.id,
              quantity: 1
            }
            const action = changeQuantityProductAction(payload);
            //Đưa action lên reducer
            dispatch(action);
          }}>+</button>
          {value}
          <button className={'btn btn-dark ms-2'} onClick={()=>{
            //Tạo ra action bằng hàm action được export từ reducer (rxslice)
            const payload = {
              id:record.id,
              quantity: -1
            }
            const action = changeQuantityProductAction(payload);
            //Đưa action lên reducer
            dispatch(action);
          }}>-</button>
        </>
      }
    },
    {
      title: 'price',
      dataIndex:'price',
      render: (value,record) => {
        return (record.price * record.quantity).toLocaleString();
      }
    },
    {
      title: 'total',
      dataIndex:'total'
    },
    {
      title: 'action',
      render:(value,record)=>{
        return <>
          <button className="btn btn-danger" onClick={() => {
            //Tạo ra action
            const action = deleteProductAction(record.id);
            /*
              const action = {
                type:'cartReducer/deleteProductAction',
                payload:record.id
              }
            */
            //Dispatch action
            dispatch(action)
          }}>
            <i className="fa fa-close"></i>
          </button>
        
        </>
      }
    }
  ]


  return (
    <div className='container'>
      <h3>Cart</h3>
      <Table rowKey={'id'} dataSource={cartStore} columns={columns} />

    </div>
  )
}

export default Cart
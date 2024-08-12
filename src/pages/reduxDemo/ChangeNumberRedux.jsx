import React from 'react'
// hook dùng để lấy state từ redux vè (redux store)
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const ChangeNumberRedux = () => {
  //hook useSelector là hook dùng để lấy state từ redux vè (redux store)
  const number = useSelector(state => state.numberReducer)

  //hook dispatch là hook dùng để lấy state từ redux vè (redux store)
  const dispatch=useDispatch();

  const handleChangeState=(quantity)=>{
    //Để đưa dữ liệu lên store (redux store)
    const action ={
      type:'CHANGE_QUANTITY',//bắt buộc
      payload:quantity
    }
    //Dùng dispatch để gửi action lên store
    //Ghi chú: khi hàm dispatch thực thi thì tất cả hàm reducer đều được chạy lại
    dispatch(action);
  }
  return (
    <div className="container">
        <h1>Number : {number}</h1>
        <button className='btn btn-dark me-2' onClick={()=>{
          handleChangeState(1)
        }}>+</button>
        <button className='btn btn-dark me-2' onClick={()=>{
          handleChangeState(-1)
        }}>-</button>
    </div>
  )
}

export default ChangeNumberRedux
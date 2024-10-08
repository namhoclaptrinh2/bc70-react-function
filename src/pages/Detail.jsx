import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { http } from '../components/util/setting';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailByIdActionThunk } from './reduxDemo/productReducer';

const Detail = () => {
    // const [prodDetail,setProdDetail] = useState({}); //useState là hook
    const {prodDetail} = useSelector(state=>state.productReducer)
    const dispatch = useDispatch();
    const [transformValue, setTransformValue] = useState('roate(0deg)')
    // const navigate = useNavigate();
    const param = useParams();
    console.log(param)

    const getProductId = async () => {
        
        //Tạo ra action thunk ( là 1 hàm có tham số là dispatch)
        const actionThunk = getProductDetailByIdActionThunk(param.proId);
        dispatch(actionThunk);
    }
    useEffect(()=>{
        //Gọi khi html load xong
        getProductId();
    },[param.proId])
  return (
    <div className="container">
        <h3>Detail - ProId: {param.proId}</h3>
        <div className="d-flex">
        <div className='w-25'>
        <img style={{transform:transformValue}} src={prodDetail.image} alt='...' className='w-100' />

            <div className="row">
            {prodDetail.detaildetailedImages?.map((deg,index)=>{
                            return<div className='col-3' key={index}>
                            <img onClick={()=>{
                              setTransformValue(deg);
                            }} src={prodDetail.image} style={{transform:deg,border:`1px solid ${deg === transformValue ? 'orange' : '#EEE'}`, cursor:'pointer'}} className='w-100 p-2 '  />
                      </div> 
                          
                        })}
            </div>
        </div>
        <div className="w-75">
            <h3>{prodDetail.name}</h3>
            <p>{prodDetail.description}</p>
            {prodDetail.size?.map((size)=>{
                        return <button key={size} className='me-2 btn btn-dark'>{size}</button>
                    })}
        </div>
        </div>
        <hr />
        <h3 className='mt-3'>Relate Product</h3>
        <div className='row'>
                {prodDetail.relatedProducts?.map((prodRelate,index)=>{
                    return <div className='col-4' key={index}>
                        <div className='card'>
                            <img alt='...' src={prodRelate.image} />
                        </div>
                        <div className="card-body">
                            <h3>{prodDetail.name}</h3>
                            <p>{prodDetail.price}</p>
                            <NavLink to={`/detail/${prodRelate.id}`} className='btn btn-dark'>View detail</NavLink>

                        </div>
                    </div>
                })}
            </div>
        
       
    </div>
)
}

export default Detail
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllProductApi } from '../../api/products';
import { NavLink } from 'react-router-dom';


const ShoesShopRQ = () => {
    const query=useQuery({
        queryKey:['getProduct'],
        queryFn:getAllProductApi,
        staleTime: 1000*5, //Set up thời gian dữ liệu cho là cũ chỉnh theo giây
        cacheTime: 1000*60
    });
    //query.data, query.error, query.loading
    if(query.isLoading){
        return <div>Loading...</div>
    }else if(query.error){
        return <div>Lỗi{query.error.message}</div>
    }


  return (
    <div className='container'>
        <h3>Shoes Shop</h3>
        <div className="row">
            {query.data.map((item)=>{
                return <div className='col-3 mt-2' key={item.id}>
                    <div className="card">
                        <img src={item.image} alt="..." />
                        <div className="card-body">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <NavLink to={`/detail/${item.id}`} className={'btn btn-dark'}>Detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ShoesShopRQ
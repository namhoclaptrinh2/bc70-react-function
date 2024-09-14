import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllUserApi } from '../../api/userApi'

const TableUserRQ = () => {
    const {data,error,isPending} = useQuery({
        queryKey:['getAllUser'],
        queryFn:getAllUserApi,
        staleTime:5 * 60 * 1000,
        cacheTime:6 * 60  * 1000
    })
if(isPending){
    return <div>Loading....</div>
} if (error){
    return <div className='alert alert-danger'>{error.message}</div>
}

  return (
    <div>
         <h3>User Management</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>fullName</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                    </tr>
                })}
            </tbody>
        </table >
    </div>
       

)
}

export default TableUserRQ
import React from 'react'
//B1: import thử viện
import { Rate } from 'antd';

//B2: Các tham số cần tạo để sử dụng(không có)

const AntDesignDemo = () => {
  return (
<div className="container">
<Rate character={<i className='fa fa-heart '></i>} allowHalf defaultValue={2.5} count={10} onChange={(values)=>{
    alert(values)
}}/>
</div> 
 )
}

export default AntDesignDemo
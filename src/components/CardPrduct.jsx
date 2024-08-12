// lệnh rafce để tạo nanh import React from 'react'
/*
import React from 'react'

const CardPrduct = () => {
  return (
    <div>CardPrduct</div>
  )
}

export default CardPrduct
*/

//Tên function là tên Component
//Nội dung giao diện component sẽ chứa trong lệnh return ( có 1 thẻ bao phủ)

import React from 'react'

const CardPrduct = () => {
  return (
   
    //jsx.element
    <div className='card w-25'> 
        <div className="card-header bg-dark text-white">Card title</div>
        CardProduct
    </div>
  )
}

export default CardPrduct
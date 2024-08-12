    import React, { useState } from 'react'



    const ReMakeChangeNumber = () => {
        const [state,setState] = useState(10);


    return (
    <div className="container">
        <h1>Ví dụ: Tăng giảm số lượng</h1>
        <button className="btn btn-dark" onClick={()=>{
            let newState = state +1;
            setState(newState)
            
        }}>+</button>
        <span className="mx-2 fs-1 ">{state}</span>
        <button className="btn btn-dark" onClick={()=>{
            let newState = state - 1;
            setState(newState-1)
        }} >-</button>

    </div>  )
    }

    export default ReMakeChangeNumber
import React, { useState } from 'react'


const ChangeColor = () => {

    const [stateCar,setStateCar] = useState('/src/assets/img/CarBasic//products/red-car.jpg')
    const handleChangeColor = (color) => {
        let newStateCarSrc = `/src/assets/img/CarBasic//products/${color}-car.jpg`
        setStateCar(newStateCarSrc)
    }
  return (
    <div className='container'>
        <h3>Change car color</h3>
        <div className='row'>
            <div className='col-6'>
            {/* <img className='w-100' src={stateSteel} alt='...' /> */}
                
                <img className='w-100' src={stateCar} alt='...' />
            </div>
            <div className='col-6'>
                <button className='mx-2 btn btn-secondary'onClick={()=>{
                    handleChangeColor('steel')
                }}>Steel car</button>
                <button className='mx-2 btn btn-danger'>Red car</button>
                <button className='mx-2 btn btn-dark'>black car</button>
                <button className='mx-2 btn btn-default text-dark border border-1'>silver car</button>

            </div>
        </div>
    </div>  )
}

export default ChangeColor
import React from 'react'

import Card from './Card'
const ConTent = () => {
  return (
    <div className='bg-success text-dark p-5 text-center'>
    <div className='p-5'>
        <h1>Content</h1>
        <div className='row'>
            <div className='col-4'>
                <Card />
            </div>
            <div className='col-4'>
                <Card />
            </div>
            <div className='col-4'>
                <Card />
            </div>
        </div>
    </div>
</div>
  )
}

export default ConTent
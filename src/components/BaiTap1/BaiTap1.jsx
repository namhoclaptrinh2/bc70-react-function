import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import ConTent from './ConTent'

import Footer from './Footer'
const BaiTap1 = () => {
  return (
    <div>
        <Header></Header>
        <div className="row">
            <div className="col-4 me-0 pe-0">
                <Navigation></Navigation>
            </div>
            <div className="col-8 ms-0 ps-0">
                <ConTent>
                   
                </ConTent>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default BaiTap1
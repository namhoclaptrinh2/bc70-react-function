import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RQPageMaster = () => {

    //bs5-navbar-background
  return (
    <>
   <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="/react-query">React Query</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" to="./useClient-demo" aria-current="page">UseClientDemo <span className="visually-hidden">(current)</span></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link active" to="./usermutaion-queryclient-demo" aria-current="page">useMutation - useQueryClientDemo  <span className="visually-hidden">(current)</span></NavLink>
      </li>
      
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
<div style={{minHeight:'75vh'}}>
    <Outlet></Outlet>
</div>
</>
    
  )
}

export default RQPageMaster
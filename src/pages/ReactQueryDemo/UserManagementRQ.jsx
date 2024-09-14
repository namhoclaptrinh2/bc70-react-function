import React from 'react'
import RegisterFormRQ from './RegisterFormRQ'
import TableUserRQ from './TableUserRQ'
import TableUserPaging from './TableUserPaging'

const UserManagementRQ = () => {
  return (
    <div className='container'>
        <RegisterFormRQ></RegisterFormRQ>
        {/* <TableUserRQ></TableUserRQ> */}
        <TableUserPaging></TableUserPaging>
    </div>
  )
}

export default UserManagementRQ
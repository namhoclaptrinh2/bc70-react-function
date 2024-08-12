import React from 'react'

const SanPhamChiTiet = (props) => {
    const {spChiTiet}= props;
  return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                {/* <h3 className='text-center'>Apple phone</h3> */}
                <h3 className='text-center'>{spChiTiet.tenSanPham}</h3>

                <img src=/*"/src/assets/img/CarBasic/applephone.jpg"*/ {spChiTiet.hinhAnh} className='w-100' alt="" />
            </div>
            <div className="col-8">
                <h3>Thông số kỹ thuật</h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>{spChiTiet.manhinh}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>{spChiTiet.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <td>Camera trước</td>
                            <td>{spChiTiet.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <td>Camera sau</td>
                            <td>{spChiTiet.cameraSau}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{spChiTiet.ram}</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>{spChiTiet.rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default SanPhamChiTiet
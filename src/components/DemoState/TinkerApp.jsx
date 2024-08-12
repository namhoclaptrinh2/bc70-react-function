import React, { useState } from 'react'

const TinkerApp = () => {
    const [changeImg,setChangeImg] = useState('https://i.pravatar.cc?u=10');
    const[like,setLike] = useState (1);
    const[disLike,setDisLike] = useState (1);
    const handleChangeImage = () => {
        //Tạo số ngẫu nhiên
        let ranNumber = Math.floor(Math.random() * 101);
        //Tạo link hình từ số ngẫu nhiên
        let newImage = `https://i.pravatar.cc?u=${ranNumber}`;
        //Gọi hàm setState để thay đổi state và render lại componet
        setChangeImg(newImage);
    }
    


  return (
    <div className="container">
        <h3>Tinker App</h3>
        <span className='badge bg-danger'>
                {like} <i className='fa fa-heart' onClick={()=>{
                    let newLike = like + 1;
                    setLike(newLike);
                }}></i>
            </span>
            <span className='badge bg-dark mx-2'>
               {disLike} <i className='fa fa-thumbs-down'></i>
            </span>
        <div className="card w-25 mx-auto" >
            <div className="card-header bg-danger fs-3">Tinker App</div>
            <img src={changeImg} alt="..." />
            <div className='card-body'>
                <h3>Bob</h3>
                <p>Love hiking and outdoors</p>
            </div>
            <div className='card-footer p-2 d-flex justify-content-between'>
                <button className='btn btn-outline-dark' onClick={()=>{
                    setDisLike(disLike+1)
                    // handleChangeImage();
                    setChangeImg(`https://i.pravatar.cc?u=${Math.floor(Math.random()*70)}`)
                }}>Dislike</button>
                <button className='btn btn-outline-danger' onClick={() =>{
                    setLike(like+1)
                    // handleChangeImage();
                    // setChangeImg(Math.floor(Math.random('https://i.pravatar.cc?u=10')*70))
                setChangeImg(`https://i.pravatar.cc?u=${Math.floor(Math.random()*70)}`)}}
                >Like</button>
            </div>
        
        </div>
    </div>
  )
}

export default TinkerApp
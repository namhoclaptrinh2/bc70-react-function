import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import { NavLink, useParams, useSearchParams } from 'react-router-dom';

const dataColumn = [
    {
        title:'id',
        dataIndex:'id'
    },
    {
        title:'name',
        dataIndex: 'name',
        filters: [{
            text:'vans',
            value:'vans'
        },
        {
            text:'nike',
            value:'nike'
        },
        {
            text:'adidas',
            value:'adidas'
        },
        ],
        onFilter: (value,record) => { //value là trường lấy từ thuộc tính filter, record là object item(cả 1 cái object)
            return record.name.toLowerCase().search(value) !== -1;
        },
        sorter:  (a, b) => {
            const nameA = a.name.toLowerCase(); // Chuyển tên thành chữ thường để so sánh không phân biệt chữ hoa thường
            const nameB = b.name.toLowerCase();
        
            if (nameA < nameB) {
                return -1; // nameA đứng trước nameB
            }
            if (nameA > nameB) {
                return 1; // nameA đứng sau nameB
            }
            return 0; // nameA và nameB bằng nhau
        },
      
    },
    {
        title:'price',
        dataIndex:'price',
        sorter:(a, b) => Number(a.price) - Number(b.price)
    },
   
    {
        title:'image',
        dataIndex:'image',
        render:(value,record,index) => {
            return <img key={index} src={record.image} alt='...' width={50} />
        }
    },
    {
        title:'action',
        dataIndex:'action',
        render:(value, record) => {
            return <>
            <NavLink to={`/detail/${record.id}`} className='btn btn-dark me-2'>View detail</NavLink>
            </>
        }
    },
]
const ProductManagementAntDesign = () => {
    const [arrProduct,setArrProduct] = useState([]);
    const [arrProductFilter, setArrProductFilter]= useState([])
    const [search, setSearch] = useSearchParams();
    const k = search.get('k');
    const getAllProductApi = async () => {
        const url = (`https://apistore.cybersoft.edu.vn/api/Product`);

        if(k){
            url= `https://apistore.cybersoft.edu.vn/api/Product?keyword=${k}`;
        }
        const res = await axios.get(url);

        console.log(res.data.content);
        //Sau khi lấy dữ liệu từ api về ta sẽ đưa vào state arrProduct
        setArrProduct(res.data.content);
    }
    useEffect(()=>{
        //Gọi api khi component load xong jsx
        getAllProductApi();
    }, [])

    const renderDropDownFilter= () => {
        const dataFilter = [{text:'van',value:'van'}, {text:'nike',value:'nike'}, {text:'adidas',value:'adidas'}, {text:'converse', value:'converse'} ];
        let options = dataFilter.map((item,index) =>{
            return <option key={index} value={item.value}>{item.text}</option>
        })
        return <select className="w-50 d-incline w-50 frm-control mb-2" onChange={(e)=>{
            console.log('value', e.target.value)
            const tuKhoa = e.target.value;
            let newArrProduct = arrProduct.filter(item => item.name.toLowerCase().search(tuKhoa) !== -1);
            //set lại state ArrProduct sau khi filter
            setArrProductFilter(newArrProduct);

        }} >
            {options}
        </select>
    }
  return (
    <div className='container'>
        {renderDropDownFilter()}
        <h3>Search</h3>
        <input className='form-control d-inline w-50' placeholder='input product name' onChange={(e) => {
             const tuKhoa = e.target.value;
             let newArrProduct = arrProduct.filter(item => item.name.toLowerCase().search(tuKhoa) !== -1);
             //set lại state ArrProduct sau khi filter
             setArrProductFilter(newArrProduct); 
             
             setSearch({
                k:e.target.value
             })
             }}/>
            

        <h3>Product management</h3>
        <Table
            columns={dataColumn}
            dataSource={arrProductFilter.length > 0 ? arrProductFilter : arrProduct}
            rowKey={'id'}
        />
    </div>
  )
}

export default ProductManagementAntDesign
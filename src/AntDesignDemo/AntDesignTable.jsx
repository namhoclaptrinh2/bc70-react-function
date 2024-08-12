import React from 'react'

//B1: copy import
import { Table } from 'antd';
//B2: copy các giá trị sử dụng cho props của table
const columns = [
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      showSorterTooltip: {
        target: 'full-header',
      },
      filterSearch: true, //Bật hộp thoại search
      onFilter: (value, record) => { //value giá trị của trường name, record nguyên object item
          //Hàm xử lý search
          console.log(value);
          console.log(record);
          return 'nội dung';
      },
      filters: [
        {
          text: 'Nam',
          value: 'Nam',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => {
        const nameItem=a.name.toLowerCase(); //s sánh dựa the chữ cái đứng đầu của tên
        const nameItemBefore=b.name.toLowerCase();
        if(nameItem > nameItemBefore){
            return 1;
        }
        return -1;
      },
      sortDirections: ['descend'],
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Nam vip proo',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  //B3: Copy noi dung cmpnnet
const AntDesignTable = () => {
    //Hook ...
  return (
    <div className="container">
        <h3>Product management</h3>
         <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            showSorterTooltip={{
                target: 'sorter-icon',
            }}
        />
    </div>
   
  )
}

export default AntDesignTable
import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getAllUserPagingApi } from '../../api/userApi';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const TableUserPaging = () => {
    const [pageIndex, setPageIndex]= useState(1)
    const {data, isLoading, error} = useQuery({
        queryKey:['userPaging',pageIndex],
        queryFn:getAllUserPagingApi,
        staleTime: 10 * 1000,
        cacheTime: 15*1000
    });

    

    if(error){
        return <div className='bg-danger text-white'>Error</div>
    }
    if(isLoading){
        return <div className='bg-danger text-white'>Loading...</div>
    }

    const {items}= data;
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
        
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            render:(data,record)=>{
              return record.gender ? <span className='bagde bg-success'>Male</span> : <span className='bagde bg-danger'>Female</span>
            }
        },
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];

return <>
    <Table columns={columns} dataSource={items} rowKey={'id'}/>;
        </>

}
export default TableUserPaging;



import React from "react";
import { Table, Button } from 'antd';

class Order extends React.Component {


  render() {
    const columns = [
      { title: '名字', dataIndex: 'name', key: 'name', align: "center" },
      { title: '单价', dataIndex: 'price', key: 'price', align: "center" },
      { title: '数量', dataIndex: 'count', key: 'count', align: "center" },
      { title: '单位', dataIndex: 'unit', key: 'unit', align: "center" },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        align: "center",
        render: () => <Button style={{
                        position: "absolute", 
                        left: "50%", 
                        top: "50%",
                        transform: 'translate(-50%, -50%)'}}
                        danger>Delete</Button>,
      },
    ];
    
    const data = [
      {
        key: 1,
        name: '可乐',
        price: 32,
        count: '12',
        unit: '元',
      },
      {
        key: 2,
        name: '可乐',
        price: 32,
        count: '12',
        unit: '元',
      },
      {
        key: 3,
        name: '可乐',
        price: 32,
        count: '12',
        unit: '元',
      }
    ];
    return (
      <div style={{
        padding: "20px 40px"
      }}>
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default Order;
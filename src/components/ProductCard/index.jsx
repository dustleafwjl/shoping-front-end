import React from 'react';
import { PlusCircleOutlined }  from '@ant-design/icons';

const ProductCard = (props) => {
  const { name, price, img, unit } = props;
  console.log(props)
  return (
    <div style={{
      width: '160px',
      display: 'inline-block',
      height: '300px',
      backgroundColor: '#fff',
      margin: '20px',
      border: '1px solid #eee',
      position: 'relative'
    }}>
      <img src={img} style={{
        width: '160px',
        height: '200px',
        backgroundColor: 'red'
      }}/>
      <div style={{
        height: '24px',
        paddingLeft: "10px",
        marginTop: '10px'
      }}>{name}</div>
      <div style={{
        height: '24px',
        paddingLeft: "10px"
      }}>单价：{price}元/{unit}</div>
      <div style={{
        position: 'absolute',
        bottom: "15px",
        right: '15px'
      }}>
        <PlusCircleOutlined/>
      </div>
    </div>
  )
}

export default ProductCard;
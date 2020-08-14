import React from "react";
import styles from './index.module.css'
import { Input, Form, Button } from 'antd';

import { addProduct } from '../../API/product'

class Product extends React.Component {


  state = {
    name: '',
    price: '',
    unit: '',
    img: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: this.state.name,
      prive: this.state.price,
      unit: this.state.unit,
      img: this.state.img
    })
    addProduct({
      name: this.state.name,
      prive: this.state.price,
      unit: this.state.unit,
      img: this.state.img
    })
  }
  render() {
    return (
      <form 
        onSubmit={this.onSubmit}
        className={styles.product}>
        <h2>添加商品</h2>
        <main>
          <div
            name="name"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>名称：
            </div>
            <Input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></Input>
          </div>
          <div
            name="price"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>价格
            </div>
            <Input value={this.state.price} onChange={(e) => this.setState({price: e.target.value})}></Input>
          </div>
          <div
            name="unit"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>单位
            </div>
            <Input value={this.state.unit} onChange={(e) => this.setState({unit: e.target.value})}></Input>
          </div>
          <div
            name="img"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>图片
            </div>
            <Input value={this.state.img} onChange={(e) => this.setState({img: e.target.value})}></Input>
          </div>
          <div>
            <button type="submit">
              提交
            </button>
          </div>
        </main>
      </form>
    );
  }
}

export default Product;
import React from "react";
import styles from './index.module.css'
import { Input, Form, Button, Modal } from 'antd';

import { addProduct } from '../../API/product'

class Product extends React.Component {


  state = {
    name: '',
    price: '',
    unit: '',
    img: '',
    disabled: true
  }

  validtion = () => {
    if(this.state.name && this.state.price && this.state.unit && this.state.img) {
      this.setState({
        disabled: false
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    addProduct({
      name: this.state.name,
      price: this.state.price,
      unit: this.state.unit,
      img: this.state.img
    }).then(res => {
      console.log(res);
      Modal.confirm({
        title: '添加商品！',
        content: '商品添加成功！将跳到商品页面',
        okText: '确认',
        cancelText: "取消",
        onOk: () => {
          this.props.history.push("/shopping")
        },
      });
    })
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
    this.validtion()
  }
  handlePriceChange = (e) => {
    this.setState({price: e.target.value});
    this.validtion()
  }
  handleUnitChange = (e) => {
    this.setState({unit: e.target.value});
    this.validtion()
  }
  handleImgChange = (e) => {
    this.setState({img: e.target.value});
    this.validtion()
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
            <Input value={this.state.name} onChange={this.handleNameChange}></Input>
          </div>
          <div
            name="price"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>价格
            </div>
            <Input value={this.state.price} onChange={this.handlePriceChange}></Input>
          </div>
          <div
            name="unit"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>单位
            </div>
            <Input value={this.state.unit} onChange={this.handleUnitChange}></Input>
          </div>
          <div
            name="img"
            className={styles.item}>
            <div>
              <span style={{color: 'red'}}>*</span>图片
            </div>
            <Input value={this.state.img} onChange={this.handleImgChange}></Input>
          </div>
          <div>
            <button type="submit" disabled={this.state.disabled}>
              提交
            </button>
          </div>
        </main>
      </form>
    );
  }
}

export default Product;
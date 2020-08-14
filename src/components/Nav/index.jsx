import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './index.module.css'
import { HomeOutlined, ShoppingCartOutlined, PlusOutlined }  from '@ant-design/icons';
const Nav = () => {

  return (
    <ul className={styles.header}>
      <li>
        <NavLink to="/shopping" activeClassName={styles.active}><HomeOutlined style={{color: "#fff", size: "18px"}}/>商城</NavLink>
      </li>
      <li>
        
        <NavLink to="/order" activeClassName={styles.active}><ShoppingCartOutlined style={{color: "#fff", size: "18px"}}/>订单</NavLink>
      </li>
      <li>
       
        <NavLink to="/product" activeClassName={styles.active}> <PlusOutlined style={{color: "#fff", size: "18px"}}/>添加商品</NavLink>
      </li>
    </ul>
  )
}

export default Nav;
import React from "react";
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../API/product'

class Shopping extends React.Component {

  state = {
    products: []
  }


  componentDidMount() {
    getProducts().then(res => {
      console.log(res.data)
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'left',
        // display: 'flex',
        // flexWrap: 'wrap',
        backgroundColor: "#fff",
        
        
      }}>
        {
          this.state.products.map((product, index) => <ProductCard 
            name={product.name}
            price={product.price}
            img={product.img}
            unit={product.unit}
            key={product.name+index}
            onClick={() => {this.props.history.push("/product")}}
            />)
        }
      </div>
    );
  }
}

export default Shopping;
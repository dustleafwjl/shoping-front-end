import React from "react";
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../API/product'

class Shopping extends React.Component {

  state = {
    products: [
      {
        name: "wjl",
        price: 12,
        img: "https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%8F%AF%E4%B9%90&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=1758476613,2749774088&os=3164956221,4002448157&simid=3483448392,375094677&pn=1&rn=1&di=208890&ln=1440&fr=&fmq=1597393053372_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fphoto.16pic.com%2F00%2F13%2F70%2F16pic_1370172_b.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined",
        unit: "瓶"
      },
      {
        name: "wjl",
        price: 12,
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597403181991&di=c64753b31a86900c75fb890c17c46d89&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017483591da785b5b3086ed4904903.jpg",
        unit: "瓶"
      },
      {
        name: "wjl",
        price: 12,
        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597403181991&di=c64753b31a86900c75fb890c17c46d89&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017483591da785b5b3086ed4904903.jpg",
        unit: "瓶"
      }
    ]
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
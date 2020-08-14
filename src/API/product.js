import axios from 'axios'


export const addProduct = async (product) => {
  axios.post("http://localhost:8080/product", product)
  // await ajax("/product", product).then(res => res.json())
}

export const getProducts = async () => {
  return await axios.get("http://localhost:8080/products")
  // await ajax("/product", product).then(res => res.json())
}


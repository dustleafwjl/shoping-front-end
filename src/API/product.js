export const addProduct = async (product) => {
  await ajax("/product", product).then(res => res.json())
}


function ajax(url, params) {
  return fetch("http://localhost:8080" + url,{
    method:"POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(params)
  });
}


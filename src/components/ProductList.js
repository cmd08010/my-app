import faker from "faker"
import React from "react"
import Data from "../data"

function ProductList() {
  const Product = Data.products[0]
  console.log(Product)
  //   const ProductCard = `<div class="card" style="width: 18rem;">
  //   <img src="..." class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>`

  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  )
}

export default ProductList

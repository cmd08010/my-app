import React from "react"
import Data from "../data"
import "bootstrap/dist/css/bootstrap.css"

function ProductList() {
  const Product = Data.products
  console.log(Product)
  //   const ProductCard = `<div class="card" style="width: 18rem;">
  //   <img src="..." class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>`
  let styles = {
    margin: "20px",
    width: "18rem",
    height: "10rem",
    backgroundColor: "blue",
    color: "white"
  }

  return (
    <div className="product">
      <h4>Product List ({Product.length})</h4>
      {Product.map(product => {
        return (
          <div className="card" style={styles} key={product.id}>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>{product.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList

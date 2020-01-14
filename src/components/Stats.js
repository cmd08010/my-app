import React from "react"
import Data from "../data"
import "bootstrap/dist/css/bootstrap.css"

function Stats() {
  const Stats = Data
  console.log(Stats)

  let styles = {
    margin: "20px",
    width: "18rem",
    height: "10rem",
    backgroundColor: "blue",
    color: "white"
  }

  return (
    <div className="product">
      <h4>Stats</h4>
      {/* {Product.map(product => { */}
      {/* return ( */}
      <div className="card" style={styles} key="test">
        <div className="card-body">
          <h5 className="card-title">The state with the most </h5>
          <p>Hu</p>
        </div>
      </div>
      {/* ) })} */}
    </div>
  )
}

export default Stats

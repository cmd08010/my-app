import React from "react"
import Data from "../data"
import "bootstrap/dist/css/bootstrap.css"

function CompanyList() {
  const Companies = Data.companies

  let styles = {
    margin: "20px",
    width: "15rem",
    height: "10rem",
    backgroundColor: "blue",
    color: "white"
  }

  return (
    <div className="companies">
      <h4>Company List ({Companies.length})</h4>
      {Companies.map(company => {
        return (
          <div className="card" style={styles} key={company.id}>
            <div className="card-body">
              <h5 className="card-title">{company.name}</h5>
              <p> in {company.state}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CompanyList

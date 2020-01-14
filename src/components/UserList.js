import React from "react"
import Data from "../data"
import "bootstrap/dist/css/bootstrap.css"

function UserList() {
  const Users = Data.users
  const Companies = Data.companies

  let styles = {
    margin: "20px",
    width: "18rem",
    height: "10rem",
    backgroundColor: "blue",
    color: "white"
  }

  return (
    <div className="user">
      <h4>User List ({Users.length})</h4>
      {Companies.map(company => {
        return Users.map(user => {
          if (user.id === company.id) {
            return (
              <div className="card" style={styles} key={user.id}>
                <div className="card-body">
                  <p>
                    {user.name} from <b>{user.state}</b> works at {company.name}
                  </p>
                </div>
              </div>
            )
          }
        })
      })}
    </div>
  )
}

export default UserList

import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

import ProductList from "./components/ProductList"
import CompanyList from "./components/CompanyList"
import UserList from "./components/UserList"
import Stats from "./components/Stats"

function App() {
  return (
    <div className="App">
      <ProductList />
      <UserList />

      <CompanyList />
      <Stats />
    </div>
  )
}

// const { companies } = data
// const foo = "bar"
// const companiesByState = companies.reduce((acc, company) => {
//   acc[company.state] = acc[company.state] || []
//   acc[company.state].push(company)
//   return acc
// })

// function App() {
//   //   return (
  
//   //     <div className="App">
//   //       <header className="App-header">
//   //         <p>
//   //           EditHI <code>src/App.js</code> and save to reload.
//   //         </p>
//   //         <p>Hello Word</p>
//   //         <a
//   //           className="App-link"
//   //           href="https://reactjs.org"
//   //           target="_blank"
//   //           rel="noopener noreferrer"
//   //         >
//   //           Learn React
//   //         </a>
//   //       </header>
//   //     </div>
//   //   )

//   return (
//     <div>
//       <h1>Company List</h1>
//       <ul>
//         {Object.entries(companiesByState).map(entry => {
//           return <li>{entry[0]}</li>
//         })}
//       </ul>
//       <ul>
//         {/* {companies.map(companies => {
//           return (
//             <li key={companies.id}>
//               {companies.name}, from {companies.state}
//             </li>
//           )
//         })} */}
//       </ul>
//     </div>
//   )
//   // }
// }
export default App

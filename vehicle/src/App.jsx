// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./component/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import NavBar  from './component/Navbar'
import Signup  from './component/SignUp'
import Home from './component/Home'
import Admindtl from './component/Admindtl' 
import Logout from './component/Lohout'

import Getvehicledtl from './component/Getvehicledtl'
import AdminDashboard from './component/AdminDashBoard'
import UserDashBoard from './component/UserDashBoard'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path = "/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
       <Route path="/home" element={<Home/>}/> 
      <Route path="/admindtl" element={<Admindtl/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/vehicledtl" element={<Getvehicledtl/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
                        <Route path="/userdashboard" element={<UserDashBoard/>}/>


      
    </Routes>

    </>
  )
}

export default App

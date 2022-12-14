import React, { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Users from './components/Users';

import Users from './Pages/Dashboard/Users'

import Home from './Pages/Dashboard/Home';
import Menu from './components/Menu';

import '../src/App.css'
import UserList from './components/UserList';
import UserDetails from './Pages/Dashboard/UserDetails'
import Contact from './Pages/Dashboard/Contact';
import Login from './Pages/Auth/Login';
import DashboardLayout from './Layouts/Dashboard/DashboardLayout';
import AuthLayout from './Layouts/Auth/AuthLayout';
import Register from './Pages/Auth/Register';
import Error404 from './Pages/Error404';
import Counter from './components/Memosiation/Counter';

function App() {

  // const [activeId, setActiveId] = useState(null)


  return (
    <div className="App">

      <Counter />


      {/* <BrowserRouter>

        <Routes>

          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Home />} />

            <Route path='users' element={<Users />} />

            <Route path='users/:id' element={<UserDetails />} />

            <Route path='contact' element={<Contact />} />
          </Route>

          <Route path='auth' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter> */}






      {/* <div>
        <UserList sendUser={setActiveId} />
      </div>
      <div>
        {
          activeId && <UserDetails selectedId={activeId} />
        }

      </div> */}
    </div>
  );
}

export default App;

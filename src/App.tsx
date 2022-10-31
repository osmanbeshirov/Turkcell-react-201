import React, { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Users from './components/Users';

import Users from './Pages/Users'

import Home from './Pages/Home';
import Menu from './components/Menu';

import '../src/App.css'
import UserList from './components/UserList';
import UserDetails from './Pages/UserDetails'
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import DashboardLayout from './Layouts/DashboardLayout';
import AuthLayout from './Layouts/AuthLayout';

function App() {

  // const [activeId, setActiveId] = useState(null)


  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Home />} />

            <Route path='users' element={<Users />} />

            <Route path='users/:id' element={<UserDetails />} />

            <Route path='contact' element={<Contact />} />
          </Route>

          <Route path='auth' element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>

        </Routes>
      </BrowserRouter>


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

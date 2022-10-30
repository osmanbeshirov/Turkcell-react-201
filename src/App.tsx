import React, { useState } from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Users from './components/Users';

import Users from './Pages/Users'

import Home from './Pages/Home';
import Menu from './components/Menu';

import '../src/App.css'
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Contact from './Pages/Contact';

function App() {

  // const [activeId, setActiveId] = useState(null)


  return (
    <div className="App">

      <BrowserRouter>

        <Menu />
        <Routes>
          <Route index element={<Home />} />

          <Route path='users' element={<Users />} />

          <Route path='contact' element={<Contact />} />
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

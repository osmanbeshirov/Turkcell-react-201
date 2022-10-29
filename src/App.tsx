import React, { useState } from 'react';
import Users from './components/Users';

import '../src/App.css'
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {

  const [activeId, setActiveId] = useState(null)




  return (
    <div className="App">
      <div>
        <UserList sendUser={setActiveId} />
      </div>
      <div>
        {
          activeId && <UserDetails selectedId={activeId} />
        }

      </div>
    </div>
  );
}

export default App;

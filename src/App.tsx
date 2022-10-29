import React from 'react';
import Users from './components/Users';

import '../src/App.css'
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <div>
        <UserList />
      </div>
      <div>Sag</div>
    </div>
  );
}

export default App;

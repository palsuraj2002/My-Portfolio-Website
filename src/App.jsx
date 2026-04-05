import React from 'react'
import UserLayout from './layouts/UserLayout'
import { Route,Routes } from 'react-router'

const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<UserLayout />}/>
        </Routes>
    </div>
  );
}

export default App
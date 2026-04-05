import React from 'react'
import UserLayout from './layouts/UserLayout'
import { Route,Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<UserLayout />}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App
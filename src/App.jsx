import React from 'react'
import AdminLayout from './layouts/AdminLayout'
import { ThemeProvider } from './contextAPI/ThemeContext'
import { Route,Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route exact path='/' element={<AdminLayout/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/skills' element={<Skills/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
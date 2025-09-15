import { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext' 
import { CropProvider } from './contexts/CropContext'
import { WeatherProvider } from './contexts/WeatherContext'
import AppRoutes from './routes/AppRoutes'

import './App.css'

function App() {

  return (
    <AuthProvider>
      <CropProvider>
        <WeatherProvider>
          <AppRoutes />
        </WeatherProvider>
      </CropProvider>
    </AuthProvider>
  )
}

export default App

{/* <AuthProvider>
      <AppRoutes />
    </AuthProvider> */}

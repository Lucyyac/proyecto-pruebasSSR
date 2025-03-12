import { Routes, Route } from 'react-router-dom'

import { Info, UserInterface, Home } from '../pages'

import Error from '../components/Error'

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/userInterface" element={<UserInterface />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}

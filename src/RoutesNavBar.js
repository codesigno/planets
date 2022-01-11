import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Planets from './pages/Planets'
import NotFound from './components/NotFound'

export default function RoutesNavBar() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/planets' element={<Planets />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

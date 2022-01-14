import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Space from './pages/Space'
import NotFound from './components/NotFound'

export default function RoutesNavBar() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/space' element={<Space />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

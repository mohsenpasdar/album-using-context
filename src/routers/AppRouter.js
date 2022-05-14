import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage'
import AlbumPage from '../components/AlbumPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } exact={true} />
        <Route path="/album/:id" element={ <AlbumPage /> } />
        <Route path="/help" element={ <HelpPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  </BrowserRouter>
)

export { AppRouter as default }

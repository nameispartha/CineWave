import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movielist from './Pages/Movielist'
import MovieDetails from './Pages/MovieDetails'
import Fav from './Pages/Fav'
import Header from './Components/Header'
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('')
  return (
    <BrowserRouter>
       <Header  search={search} setSearch={setSearch} setSort={setSort}/>
       <Routes>
        <Route path='/' element={<Movielist  search={search} sort={sort}/>} />
        <Route path='/details/:id' element={<MovieDetails />} />
        <Route path='/fav' element={<Fav />}/>
       </Routes>

    </BrowserRouter>
   
  )
}

export default App
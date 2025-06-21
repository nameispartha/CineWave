import React from 'react'
// import { useState } from 'react'
import '../App.css'

const Header = ({search, setSearch, setSort}) => {
    // const [search, setSearch]  = useState('')
  return (
    <div className="header">
      <h2 className="header-title">This is Header </h2>
    <div  className="header-controls">
      <input 
      type='text'
      value={search}
      placeholder='search here bro'
      onChange={(e) => setSearch(e.target.value)} />

      <select onChange={(e) => setSort(e.target.value )}>
        <option value='ascending'>Year A - B</option>
        <option value='descending'>Year B - A</option>
      </select>
      </div>

    </div>
  )
}

export default Header

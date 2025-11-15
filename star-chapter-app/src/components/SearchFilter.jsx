import { useState } from 'react'

export const SearchFilter = ({ onSearch, onFilter }) => {
  const [search, setSearch] = useState('')
  const [species, setSpecies] = useState('')

  const handleSearch = () => {
    onSearch(search)
    onFilter('')
  }

  const handleFilter = () => {
    onFilter(species)
    onSearch('')
    setSearch('')
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[rgb(153,165,224)] ">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-2 border rounded border-2 border-black"
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="p-2 border-2 border-black rounded gap-8 cursor-pointer"
      >
        <option value="" className='border border-black '>All Species</option>
        <option value="human">Human</option>
        <option value="wookiee">Wookiee</option>
        <option value="droid">Droid</option>
      </select>
      <button onClick={handleSearch} className="bg-blue-500 border-2 border-black text-white px-4 py-2 rounded cursor-pointer">
        Search
      </button>
      <button onClick={handleFilter} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer border-2 border-black">
        Filter
      </button>
    </div>
  )
}
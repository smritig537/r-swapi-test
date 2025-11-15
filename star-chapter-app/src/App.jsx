import { useState } from 'react'
import { SearchFilter } from './components/SearchFilter.jsx'
import { CharacterList } from './components/CharacterList.jsx'
import { CharacterModal } from './components/CharacterModal.jsx'
import { Pagination } from './components/Pagination.jsx'
import { useCharacters } from './components/useCharacters.js'

function App() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [speciesFilter, setSpeciesFilter] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const { characters, loading, error, totalPages, fetchHomeworld, getSpecies } = useCharacters(page, search, speciesFilter)

  const handleCharacterSelect = (char) => setSelectedCharacter(char)
  const handleCloseModal = () => setSelectedCharacter(null)
  const handlePageChange = (newPage) => setPage(newPage)

  return (
    <div className="min-h-screen bg-[rgb(17,29,62)]">
      <header className="bg-[rgb(3,7,18)] text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Star Wars Characters</h1>
      </header>
      <SearchFilter onSearch={setSearch} onFilter={setSpeciesFilter} />
      <h1 className='text-center text-5xl font-bold p-4 '>Star Wars Characters</h1>
   <h3 className='text-white text-center p-6 font-bold'>Create Iconic Star Wars Characters
Unleash your creativity and design your own Star Wars characters with our cutting-edge character maker. Whether you are a fan or artist, bring your imagination to life with ease and precision. Whether it’s completely custom concept designs, or bringing to life modern renditions of classic characters, our powerful character maker will have you covered!</h3>   
      {loading && <div className="text-center p-8">Loading characters...</div>}
      {error && <div className="text-center p-8 text-red-500">{error}</div>}
      {!loading && !error && characters.length === 0 && <div className="text-center p-8">No characters found.</div>}
      <CharacterList
        characters={characters}
        onCharacterSelect={handleCharacterSelect}
        page={page}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <CharacterModal
        character={selectedCharacter}
        onClose={handleCloseModal}
        fetchHomeworld={fetchHomeworld}
        getSpecies={getSpecies}
      />
    </div>
  )
}

export default App
import { render, screen, waitFor } from '@testing-library/react'
import { CharacterModal } from '../components/CharacterModal'

// Mock fetch for homeworld/species
global.fetch = jest.fn()

const mockCharacter = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  birth_year: '19BBY',
  created: '2014-12-09T13:52:14.324000Z',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['url1', 'url2'],
  species: [],
}

const mockFetchHomeworld = async () => ({ name: 'Tatooine', terrain: 'desert', climate: 'arid', population: '200000' })
const mockGetSpecies = async () => ({ name: 'Human' })

test('renders character details in modal', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => ({ name: 'Tatooine', terrain: 'desert', climate: 'arid', population: '200000' }),
  })

  render(
    <CharacterModal
      character={mockCharacter}
      onClose={() => {}}
      fetchHomeworld={mockFetchHomeworld}
      getSpecies={mockGetSpecies}
    />
  )

  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  expect(screen.getByText('Height: 172 cm')).toBeInTheDocument()
  expect(screen.getByText('Mass: 77 kg')).toBeInTheDocument()
  expect(screen.getByText('Films Appeared In: 2')).toBeInTheDocument()
  await waitFor(() => {
    expect(screen.getByText('Species: Human')).toBeInTheDocument()
    expect(screen.getByText('Homeworld: Tatooine')).toBeInTheDocument()
  })
})

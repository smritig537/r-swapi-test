import { useState, useEffect } from 'react';

export const CharacterModal = ({ character, onClose, fetchHomeworld, getSpecies }) => {
  const [homeworld, setHomeworld] = useState(null);
  const [speciesName, setSpeciesName] = useState('Unknown');

  useEffect(() => {
    if (character) {
      const loadDetails = async () => {
        if (character.species.length > 0) {
          const species = await getSpecies(character.species[0]);
          setSpeciesName(species.name);
        }
        if (character.homeworld) {
          const planet = await fetchHomeworld(character.homeworld);
          setHomeworld(planet);
        }
      };
      loadDetails();
    }
  }, [character, getSpecies, fetchHomeworld]);

  if (!character) return null;

  const formatDate = (isoDate) => new Date(isoDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const filmCount = character.films.length;

  return (
    <div className="fixed inset-0 bg-blend-saturation bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Date Added:</strong> {formatDate(character.created)}</p>
            <p><strong>Films Appeared In:</strong> {filmCount}</p>
            <p><strong>Species:</strong> {speciesName}</p>
            {homeworld && (
              <div>
                <p><strong>Homeworld:</strong> {homeworld.name}</p>
                <p><strong>Terrain:</strong> {homeworld.terrain}</p>
                <p><strong>Climate:</strong> {homeworld.climate}</p>
                <p><strong>Population:</strong> {homeworld.population}</p>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
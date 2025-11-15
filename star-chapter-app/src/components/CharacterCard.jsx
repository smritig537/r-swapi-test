import { useState, useEffect } from 'react';

const getSpeciesColor = (species) => {
  const colors = {
    human: 'blue',
    wookiee: 'green',
    droid: 'gray',
    twilek: 'purple',
    zabraki: 'red',
  };
  return colors[species.toLowerCase()] || 'gray';
};

export const CharacterCard = ({ character, onClick, index }) => {
  const [speciesName, setSpeciesName] = useState('unknown');
  const [color, setColor] = useState('gray');

  useEffect(() => {
    const fetchSpecies = async () => {
      if (character.species.length > 0) {
        try {
          const res = await fetch(character.species[0]);
          const data = await res.json();
          const name = data.name.toLowerCase();
          setSpeciesName(name);
          setColor(getSpeciesColor(name));
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchSpecies();
  }, [character.species]);

  return (
    <div
      className={`group relative p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-[rgb(3,7,18)]/90 via-[rgb(3,7,18)] to-gray-900 border border-[rgb(3,7,18)]/50 hover:border-[rgb(3,7,18)]/80 ${color}-100/20 ${color}-500/30 hover:${color}-400/50`}
      onClick={onClick}
    >
      {/* Overlay for subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <img
        src={`https://picsum.photos/300/200?random=${index}`}
        alt={character.name}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
      />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{character.name}</h3>
        <p className="text-gray-300 text-sm font-medium drop-shadow-sm">Species: <span className={`text-${color}-300 capitalize`}>{speciesName}</span></p>
      </div>
      
      {/* Subtle accent border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
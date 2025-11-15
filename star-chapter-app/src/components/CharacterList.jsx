import { CharacterCard } from './CharacterCard.jsx'

export const CharacterList = ({ characters, onCharacterSelect, page }) => {
  if (characters.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {characters.map((char, index) => (
        <CharacterCard
          key={char.name}
          character={char}
          index={index + (page - 1) * 10}
          onClick={() => onCharacterSelect(char)}
        />
      ))}
    </div>
  )
}
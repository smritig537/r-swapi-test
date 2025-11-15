import { formatDate } from './utils.js';

export const openModal = async (char, getSpeciesNameFn, fetchHomeworldFn) => {
  const modalEl = document.getElementById('modal');
  const nameEl = document.getElementById('modalName');
  const detailsEl = document.getElementById('modalDetails');
  const closeBtn = document.getElementById('closeModal');

  // Fetch details
  nameEl.textContent = char.name;
  const speciesData = await getSpeciesNameFn(char.species[0] || '');
  const speciesName = speciesData.name || 'Unknown';
  const color = getSpeciesColor(speciesName.toLowerCase());  // Assume getSpeciesColor imported or defined

  let homeworldDetails = '';
  if (char.homeworld) {
    const planet = await fetchHomeworldFn(char.homeworld);
    homeworldDetails = `
      <div class="mt-4 pt-4 border-t border-${color}-300/30">
        <h4 class="text-lg font-semibold text-${color}-300 mb-2">Homeworld: ${planet.name}</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
          <p><span class="text-gray-400">Terrain:</span> ${planet.terrain}</p>
          <p><span class="text-gray-400">Climate:</span> ${planet.climate}</p>
          <p><span class="text-gray-400">Population:</span> ${planet.population}</p>
        </div>
      </div>
    `;
  }

  // Enhanced details with better structure and dark theme classes
  detailsEl.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <span class="text-${color}-400 text-sm font-medium uppercase tracking-wider">Species: <span class="text-${color}-300 capitalize">${speciesName}</span></span>
        <span class="text-gray-400 text-xs">Films: ${char.films.length}</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <p class="flex justify-between"><span class="text-gray-400">Height:</span> <span class="font-medium text-white">${char.height} cm</span></p>
          <p class="flex justify-between"><span class="text-gray-400">Mass:</span> <span class="font-medium text-white">${char.mass} kg</span></p>
          <p class="flex justify-between"><span class="text-gray-400">Birth Year:</span> <span class="font-medium text-white">${char.birth_year}</span></p>
        </div>
        <div class="space-y-2">
          <p class="flex justify-between"><span class="text-gray-400">Date Added:</span> <span class="font-medium text-white">${formatDate(char.created)}</span></p>
          <p class="flex justify-between"><span class="text-gray-400">Homeworld:</span> <span class="font-medium text-white">${char.homeworld ? 'Fetched Above' : 'N/A'}</span></p>
        </div>
      </div>
      
      ${homeworldDetails}
    </div>
  `;

  closeBtn.onclick = closeModal;
  modalEl.classList.remove('hidden');
  modalEl.style.opacity = '0';
  modalEl.style.transform = 'scale(0.95)';
  // Animate in
  requestAnimationFrame(() => {
    modalEl.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    modalEl.style.opacity = '1';
    modalEl.style.transform = 'scale(1)';
  });
};

export const closeModal = () => {
  const modalEl = document.getElementById('modal');
  modalEl.style.opacity = '0';
  modalEl.style.transform = 'scale(0.95)';
  setTimeout(() => {
    modalEl.classList.add('hidden');
    modalEl.style.transition = '';
  }, 300);
};

// Helper function (add to utils.js if not there)
const getSpeciesColor = (species) => {
  const colors = {
    human: 'blue',
    wookiee: 'green',
    droid: 'gray',
    twilek: 'purple',
    zabraki: 'red',
  };
  return colors[species] || 'gray';
};
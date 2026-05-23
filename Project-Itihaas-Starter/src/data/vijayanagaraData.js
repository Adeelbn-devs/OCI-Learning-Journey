export const VIJAYANAGARA_TIMELINE_RANGE = {
  minYear: 1500,
  maxYear: 1565,
};

const HAMPI_COORDINATES = { latitude: 15.335, longitude: 76.46 };

export const vijayanagaraSnapshots = [
  {
    year: 1500,
    era: 'Late Sangama to Saluva Transition',
    ruler: 'Immadi Narasimha',
    empireExtent: 'Influence centered around core Karnataka territories with contested frontiers.',
    wars: [
      'Ongoing regional conflict with the Bahmani successor states in the Deccan.',
      'Power consolidation campaigns led by military elites within the empire.',
    ],
    monuments: [
      'Early structural expansions in and around the Hampi sacred center.',
      'Defensive fortification maintenance in strategic riverine zones.',
    ],
    mapPins: [
      { id: 'hampi-1500', title: 'Hampi (Capital Core)', type: 'capital', ...HAMPI_COORDINATES },
      { id: 'tungabhadra-1500', title: 'Tungabhadra Defensive Belt', type: 'frontier', latitude: 15.2, longitude: 76.6 },
    ],
  },
  {
    year: 1520,
    era: 'Tuluva Zenith',
    ruler: 'Krishnadevaraya',
    empireExtent: 'Major territorial expansion across Karnataka, Andhra, and Tamil regions.',
    wars: [
      'Raichur Campaign against the Adil Shahi Sultanate.',
      'Eastern expeditions strengthening control over coastal and inland trade routes.',
    ],
    monuments: [
      'Krishna Temple complex patronage in Hampi.',
      'Royal infrastructure and mandapa developments in imperial ceremonial zones.',
    ],
    mapPins: [
      { id: 'hampi-1520', title: 'Hampi Royal Center', type: 'capital', ...HAMPI_COORDINATES },
      { id: 'raichur-1520', title: 'Raichur Doab (Conflict Zone)', type: 'battle', latitude: 16.2, longitude: 77.37 },
      { id: 'tirupati-1520', title: 'Temple Patronage Network', type: 'monument', latitude: 13.6288, longitude: 79.4192 },
    ],
  },
  {
    year: 1545,
    era: 'Aravidu-Precursor Power Balancing',
    ruler: 'Aliya Rama Raya (Regent Influence)',
    empireExtent: 'Confederated control maintained through diplomacy, alliances, and military pressure.',
    wars: [
      'Frequent strategic intervention in Deccan Sultanate rivalries.',
      'Defensive frontier maneuvering with rotating alliance patterns.',
    ],
    monuments: [
      'Continued temple-city embellishments in Hampi and nearby regions.',
      'Courtly architectural additions linked to elite patronage.',
    ],
    mapPins: [
      { id: 'hampi-1545', title: 'Hampi Administrative Core', type: 'capital', ...HAMPI_COORDINATES },
      { id: 'penukonda-1545', title: 'Penukonda Strategic Node', type: 'fort', latitude: 14.0839, longitude: 77.5946 },
    ],
  },
  {
    year: 1565,
    era: 'Battle of Talikota Turning Point',
    ruler: 'Aliya Rama Raya',
    empireExtent: 'Imperial structure suffers major military setback after Talikota.',
    wars: [
      'Battle of Talikota against allied Deccan Sultanates.',
      'Post-battle strategic retreat and territorial fragmentation.',
    ],
    monuments: [
      'Hampi monuments face widespread destruction and abandonment phases.',
      'Administrative relocation efforts toward Penukonda region.',
    ],
    mapPins: [
      { id: 'talikota-1565', title: 'Talikota Battlefield', type: 'battle', latitude: 16.4731, longitude: 76.31 },
      { id: 'hampi-1565', title: 'Hampi Monument Zone', type: 'monument', ...HAMPI_COORDINATES },
    ],
  },
];

export const getClosestSnapshot = (year) => {
  return vijayanagaraSnapshots.reduce((closest, current) => {
    const currentDiff = Math.abs(current.year - year);
    const closestDiff = Math.abs(closest.year - year);
    return currentDiff < closestDiff ? current : closest;
  }, vijayanagaraSnapshots[0]);
};

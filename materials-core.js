// desnity in kg/m3

export const materials = {
  aluminium_generic: {
    density: 2700,
    surfaceRoughness: 5 * 10 ** -6,
    E: 69 * 10 ** 9,
    G: 2.4 * 10 ** 10,
  },
  aluminum_6082T6: {
    density: 2700,
    surfaceRoughness: 5 * 10 ** -6,
    E: 70 * 10 ** 9,
    G: 2.6 * 10 ** 10,
  },
  aluminum_6061T6: {
    density: 2700,
    surfaceRoughness: 5 * 10 ** -6,
    E: 68.9 * 10 ** 9,
    G: 2.6 * 10 ** 10,
  },
  aluminum_6063T6: {
    density: 2700,
    surfaceRoughness: 5 * 10 ** -6,
    E: 68.9 * 10 ** 9,
    G: 25.8 * 10 ** 10,
  },
  MDF: {
    density: 750,
    surfaceRoughness: 25 * 10 ** -6,
    E: 4 * 10 ** 9,
    G: 2.5 * 10 ** 9,
  },
  PLA: {
    density: 1250,
    surfaceRoughness: 22.5 * 10 ** -6,
    E: 3.5 * 10 ** 9,
    G: 2.4 * 10 ** 9,
  },
  ABS: {
    density: 1050,
    surfaceRoughness: 73 * 10 ** -6,
    E: 1.79 * 10 ** 9,
    G: 875 * 10 ** 6,
  },
  PET: {
    density: 1380,
    surfaceRoughness: 8 * 10 ** -6,
    E: 3.17 * 10 ** 9,
    G: 525 * 10 ** 6,
  },
};

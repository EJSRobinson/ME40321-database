//TYPES
// quant (Simple / Max Min)
// range (Varries Over a range)
// list (Discrete values)
// qual (Simple string)

export const props = {
  0: {
    id: 0,
    name: 'Tip Chord',
    shortName: 'ct',
    type: 'quant',
    limits: {
      min: 0.005,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  1: {
    id: 1,
    name: 'Root Chord',
    shortName: 'cr',
    type: 'quant',
    limits: {
      min: 0.005,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  2: {
    id: 2,
    name: 'Span',
    shortName: 'S',
    type: 'quant',
    limits: {
      min: 0.005,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  3: {
    id: 3,
    name: 'Aspect Ratio',
    shortName: 'AR',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  4: {
    id: 4,
    name: 'Taper Ratio',
    shortName: 'TR',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  5: {
    id: 5,
    name: 'Fin Area',
    shortName: 'Afin',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm²',
      siMultiplier: 1000 ** 2,
    },
  },
  6: {
    id: 6,
    name: 'Normal Slope (Single Fin)',
    shortName: 'Cna',
    type: 'quant',
    limits: {
      min: 0.00000001,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  8: {
    id: 8,
    name: 'Maximum Angle of Attack',
    shortName: 'AoA',
    type: 'quant',
    limits: {
      max: (30 * Math.PI) / 180,
      min: 0,
    },
    units: {
      displayUnits: '°',
      siMultiplier: 180 / Math.PI,
    },
  },
  9: {
    id: 9,
    name: 'Maximum Normal Force Coefficient',
    shortName: 'Cn',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  10: {
    id: 10,
    name: 'Maximum Tangential Force Coefficient',
    shortName: 'Ct',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  11: {
    id: 11,
    name: 'Maximum Lift Force Coefficient',
    shortName: 'Cl',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  12: {
    id: 12,
    name: 'Maximum Drag Force Coefficient',
    shortName: 'Cd',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  13: {
    id: 13,
    name: 'Maximum Lift Force',
    shortName: 'Fl',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'N',
      siMultiplier: 1,
    },
  },
  14: {
    id: 14,
    name: 'Maximum Drag Force',
    shortName: 'Fd',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'N',
      siMultiplier: 1,
    },
  },
  15: {
    id: 15,
    name: 'Maximum Stress',
    shortName: 'Sigma',
    type: 'range',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'KPa',
      siMultiplier: 1 / 1000,
    },
  },
  16: {
    id: 16,
    name: 'Thickness',
    shortName: 't',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  17: {
    id: 17,
    name: 'Maximum Deflection',
    shortName: 'v',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  18: {
    id: 18,
    name: 'Mass',
    shortName: 'm',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'kg',
      siMultiplier: 1,
    },
  },
  19: {
    id: 19,
    name: 'Set Mass',
    shortName: 'mT',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'kg',
      siMultiplier: 1,
    },
  },
  20: {
    id: 20,
    name: 'Quantity of Fins in set',
    shortName: 'N',
    type: 'quant',
    limits: {
      min: 3,
    },
    units: {
      displayUnits: 'Fins',
      siMultiplier: 1,
    },
  },
  21: {
    id: 21,
    name: 'Leading Edge Sweep',
    shortName: 'LEsw',
    type: 'quant',
    limits: {
      min: 0,
      max: (75 * Math.PI) / 180,
    },
    units: {
      displayUnits: '°',
      siMultiplier: 180 / Math.PI,
    },
  },
  22: {
    id: 22,
    name: 'Trailing Edge Sweep',
    shortName: 'TEsw',
    type: 'quant',
    limits: {
      min: 0,
      max: (75 * Math.PI) / 180,
    },
    units: {
      displayUnits: '°',
      siMultiplier: 180 / Math.PI,
    },
  },
  23: {
    id: 23,
    name: 'Axial Position',
    shortName: 'Xfin',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  24: {
    id: 24,
    name: 'Static Stability Margin',
    shortName: 'Kn',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'Cal',
      siMultiplier: 1,
    },
  },
  25: {
    id: 25,
    name: 'Maximum Mach Number',
    shortName: 'M',
    type: 'quant',
    limits: {
      min: 0,
      max: 1,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  26: {
    id: 26,
    name: 'Maximum Velocity',
    shortName: 'V',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'm/s',
      siMultiplier: 1,
    },
  },
  27: {
    id: 27,
    name: 'Critical Flutter Velocity',
    shortName: 'Vcr',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'm/s',
      siMultiplier: 1,
    },
  },
  28: {
    id: 28,
    name: 'Divergence Velocity',
    shortName: 'Vdiv',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'm/s',
      siMultiplier: 1,
    },
  },
  29: {
    id: 29,
    name: 'Corrective Moment Coefficient',
    shortName: 'C1',
    type: 'quant',
    limits: {},
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  30: {
    id: 30,
    name: 'Natural Pitching Frequency',
    shortName: 'Wn',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'rad/s',
      siMultiplier: 1,
    },
  },
  31: {
    id: 31,
    name: 'Damping Ratio in Pitch',
    shortName: 'Zeta',
    type: 'quant',
    limits: {},
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  32: {
    id: 32,
    name: 'Pitching Time Period',
    shortName: 'Tp',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 's',
      siMultiplier: 1,
    },
  },
  33: {
    id: 33,
    name: 'Material',
    shortName: 'Mat',
    type: 'list',
    limits: {},
  },
  34: {
    id: 34,
    name: 'Aerfoil',
    shortName: 'Arf',
    type: 'list',
    limits: {},
  },
  35: {
    id: 35,
    name: 'Normal, Force',
    shortName: 'Fn',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'N',
      siMultiplier: 1,
    },
  },
  36: {
    id: 36,
    name: 'Tangential Force',
    shortName: 'Ft',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'N',
      siMultiplier: 1,
    },
  },
  37: {
    id: 37,
    name: 'Air Density',
    shortName: 'RowA',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'kg/m³',
      siMultiplier: 1,
    },
  },
  38: {
    id: 38,
    name: 'Normal Slope (Single Fin)',
    shortName: 'CnaTot',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
  },
  40: {
    id: 40,
    name: 'Mean Aerodynamic Chord Length',
    shortName: 'Cbar',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
  },
  41: {
    id: 41,
    name: 'Mid-Chord Sweep Angle',
    shortName: 'Msw',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '°',
      siMultiplier: 180 / Math.PI,
    },
  },
};

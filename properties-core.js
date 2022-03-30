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
      min: 0,
    },
  },
  1: {
    id: 1,
    name: 'Root Chord',
    shortName: 'cr',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  2: {
    id: 2,
    name: 'Span',
    shortName: 'S',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  4: {
    id: 4,
    name: 'Taper Ratio',
    shortName: 'TR',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  6: {
    id: 6,
    name: 'Normal Slope (Single Fin)',
    shortName: 'Cna',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  7: {
    id: 7,
    name: 'Tangential Slope (Single Fin)',
    shortName: 'Cta',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  8: {
    id: 8,
    name: 'Maximum Angle of Attack',
    shortName: 'AoA',
    type: 'quant',
    limits: {
      max: 30,
      min: 0,
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
  },
  10: {
    id: 10,
    name: 'Maximum Tangential Force Coefficient',
    shortName: 'Ct',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  12: {
    id: 12,
    name: 'Maximum Drag Force Coefficient',
    shortName: 'Cd',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  14: {
    id: 14,
    name: 'Maximum Drag Force',
    shortName: 'Fd',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  16: {
    id: 16,
    name: 'Thickness',
    shortName: 't',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  18: {
    id: 18,
    name: 'Mass',
    shortName: 'm',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  20: {
    id: 20,
    name: 'Quantity of Fins in set',
    shortName: 'N',
    type: 'quant',
    limits: {
      min: 3,
    },
  },
  21: {
    id: 21,
    name: 'Leading Edge Sweep',
    shortName: 'LEsw',
    type: 'quant',
    limits: {
      min: -Math.PI / 2,
      max: Math.PI / 2,
    },
  },
  22: {
    id: 22,
    name: 'Trailing Edge Sweep',
    shortName: 'TEsw',
    type: 'quant',
    limits: {
      min: -Math.PI / 2,
      max: Math.PI / 2,
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
  },
  24: {
    id: 24,
    name: 'Static Stability Margin',
    shortName: 'Kn',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  26: {
    id: 26,
    name: 'Maximum Velocity',
    shortName: 'V',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  28: {
    id: 28,
    name: 'Divergence Velocity',
    shortName: 'Vdiv',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  29: {
    id: 29,
    name: 'Corrective Moment Coefficient',
    shortName: 'C1',
    type: 'quant',
    limits: {},
  },
  30: {
    id: 30,
    name: 'Natural Pitching Frequency',
    shortName: 'Wn',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  31: {
    id: 31,
    name: 'Damping Ratio in Pitch',
    shortName: 'Zeta',
    type: 'quant',
    limits: {},
  },
  32: {
    id: 32,
    name: 'Pitching Time Period',
    shortName: 'Tp',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  36: {
    id: 36,
    name: 'Tangential Force',
    shortName: 'Ft',
    type: 'quant',
    limits: {
      min: 0,
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
  },
  38: {
    id: 38,
    name: 'Normal Slope (Single Fin)',
    shortName: 'CnaTot',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
  39: {
    id: 39,
    name: 'Tangential Slope (Single Fin)',
    shortName: 'CtaTot',
    type: 'quant',
    limits: {
      min: 0,
    },
  },
};

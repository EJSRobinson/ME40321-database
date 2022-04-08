export const cont = {
  1000: {
    id: 1000,
    name: 'Centre of Gravity Position',
    shortName: 'XCog',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
    group: 'Context',
  },
  1001: {
    id: 1001,
    name: 'Maximum Altitude',
    shortName: 'Alt',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'm',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1002: {
    id: 1002,
    name: 'Launch Air Temperature',
    shortName: 'Ta',
    type: 'quant',
    limits: {
      min: 253,
      max: 333,
    },
    units: {
      displayUnits: '°K',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1003: {
    id: 1003,
    name: 'Fin Internal Span',
    shortName: 'Si',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
    group: 'Context',
  },
  1005: {
    id: 1005,
    name: 'Rocket Diameter',
    shortName: 'D',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
    group: 'Context',
  },
  1006: {
    id: 1006,
    name: 'Rocket Reference Area',
    shortName: 'Aref',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm²',
      siMultiplier: 1000 ** 2,
    },
    group: 'Context',
  },
  1007: {
    id: 1007,
    name: 'Pitching Moment of Intertia',
    shortName: 'I',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'kgm²',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1008: {
    id: 1008,
    name: 'Aerodynamic Damping Moment Coefficient',
    shortName: 'C2a',
    type: 'quant',
    limits: {},
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1009: {
    id: 1009,
    name: 'Propulsive Damping Moment Coefficient',
    shortName: 'C2p',
    type: 'quant',
    limits: {},
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1010: {
    id: 1010,
    name: 'Normal Slope of all non-fin components',
    shortName: 'CnaComp',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: '',
      siMultiplier: 1,
    },
    group: 'Context',
  },
  1011: {
    id: 1011,
    name: 'Axial distance all non-fin components (Weighted Average)',
    shortName: 'Xcomp',
    type: 'quant',
    limits: {
      min: 0,
    },
    units: {
      displayUnits: 'mm',
      siMultiplier: 1000,
    },
    group: 'Context',
  },
};

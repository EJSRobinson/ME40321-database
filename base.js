import { props } from './properties-core.js';
import { cont } from './context-core.js';
import { materials } from './materials-core.js';
import { aerofoils } from './aerofoils-core.js';

//TYPES
// quant (Simple / Max Min)
// range (Varries Over a range)
// list (Discrete values)
// qual (Simple string)

const valueTypes = {
  quant: { typeName: 'quant', max: null, min: null },
  range: { typeName: 'range', max: [], min: [] },
  list: { typeName: 'list', options: [], val: null },
  qual: { typeName: 'qual', val: null },
};

function getTypeTemplate(type) {
  return JSON.parse(JSON.stringify(valueTypes[type]));
}

function getFixedTemplate(type, set) {
  switch (type) {
    case 'quant':
    case 'range':
      return {
        max: set,
        min: set,
      };
    case 'list':
    case 'qual':
      return {
        val: set,
      };
  }
}

function addOptions(properties) {
  // Materials
  let materialProp = properties.get('Mat');
  for (const [material, value] of Object.entries(materials)) {
    materialProp.value.options.push(material);
  }
  properties.set('Mat', materialProp);
  // Aerofoils
  let ArfProp = properties.get('Arf');
  for (const [aerofoil, value] of Object.entries(aerofoils)) {
    ArfProp.value.options.push(aerofoil);
  }
  properties.set('Arf', ArfProp);

  return properties;
}

export function getProperties() {
  let properties = new Map();
  for (const [key, value] of Object.entries(props)) {
    properties.set(value.shortName, {
      id: key,
      name: value.name,
      shortName: value.shortName,
      value: getTypeTemplate(value.type),
      limits: value.limits,
      fixed: getFixedTemplate(value.type, false),
    });
  }
  properties = addOptions(properties);
  return properties;
}

export function getContext() {
  let context = new Map();
  for (const [key, value] of Object.entries(cont)) {
    context.set(value.shortName, {
      id: key,
      name: value.name,
      shortName: value.shortName,
      value: getTypeTemplate(value.type),
      limits: value.limits,
      fixed: getFixedTemplate(value.type, true),
    });
  }
  return context;
}

export function getAll() {
  return new Promise(async (resolve, reject) => {
    let all = new Map([...getProperties(), ...getContext()]);
    resolve(all);
  });
}

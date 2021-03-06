import { props } from './properties-core.js';
import { cont } from './context-core.js';

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
  return valueTypes[type];
}

export function getProperties() {
  let properties = new Map();
  for (const [key, value] of Object.entries(props)) {
    properties.set(value.shortName, {
      id: key,
      name: value.name,
      shortName: value.shortName,
      value: getTypeTemplate(value.type),
    });
  }
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
    });
  }
  return context;
}

export function getAll() {
  let all = new Map([...getProperties(), ...getContext()]);
  return all;
}

console.log(getAll());

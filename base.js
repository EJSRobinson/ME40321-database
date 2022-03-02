import { props } from './properties-core.js';
import { cont } from './context-core.js';

const valueTemplate = { max: null, min: null };

export function getProperties() {
  let properties = new Map();
  for (const [key, value] of Object.entries(props)) {
    properties.set(key, {
      name: value.name,
      shortName: value.shortName,
      value: valueTemplate,
    });
  }
  return properties;
}

export function getContext() {
  let context = new Map();
  for (const [key, value] of Object.entries(cont)) {
    context.set(key, {
      name: value.name,
      shortName: value.shortName,
      value: valueTemplate,
    });
  }
  return context;
}

console.log(getContext());

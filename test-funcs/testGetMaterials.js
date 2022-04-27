import { materials } from '../materials-core.js';

function display(mats) {
  let rows = [
    [
      '* Type *',
      '* Density *',
      '* Typical Surface Roughness *',
      '* Elastic Modulus *',
      '* Shear Modulus *',
    ],
  ];
  for (const [key, value] of Object.entries(mats)) {
    rows.push([key, value.density, value.surfaceRoughness, value.E, value.G]);
  }
  console.table(rows);
}

async function main() {
  display(materials);
}

main();

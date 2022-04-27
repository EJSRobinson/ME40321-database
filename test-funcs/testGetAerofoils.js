import { aerofoils } from '../aerofoils-core.js';

function display(mats) {
  let rows = [['* Shape *', '* Display Name *']];
  for (const [key, value] of Object.entries(mats)) {
    rows.push([key, value.displayName]);
  }
  console.table(rows);
}

async function main() {
  display(aerofoils);
}

main();

import { getAll } from '../base.js';

function display(myMap) {
  let rows = [['* ID *', '* Name *', '* Abrev. *', '* Type *', '* Units *', '* Group *']];
  for (const [key, value] of myMap.entries()) {
    rows.push([
      value.id,
      value.name,
      value.shortName,
      value.value.typeName,
      value.units.displayUnits,
      value.group,
    ]);
  }
  console.table(rows);
}

async function main() {
  let all = await getAll();
  display(all);
}

main();

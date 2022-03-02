function testEvaluator(vars) {
  return vars.i1 * vars.i2;
}

base = {
  //Keyby Id
  0: {
    independent: true,
    name: 'Test Indep Prop 1',
    max: 10,
    min: -10,
    value: 1,
    step: 1,
    dependentDerivates: [],
  },
  1: {
    independent: true,
    name: 'Test Indep Prop 2',
    max: 8,
    min: 2,
    value: 5,
    step: 1,
    dependentDerivates: [],
  },
  2: {
    independent: false,
    name: 'Test Dep Prop 1',
    max: 100,
    min: 90,
    value: null,
    oldValue: null,
    evaluator: testEvaluator,
  },
};

let size = Object.keys(base).length;

let indepIds = [];

// Get Independent Ids
for (let i = 0; i < size; i++) {
  if (base[`${i}`].independent === true) {
    indepIds.push(i);
  }
}

// Populate depDerivates + Init evaluation of independent variables
for (let i = 0; i < size; i++) {
  if (base[`${i}`].independent === false) {
    base[`${i}`].value = base[`${i}`].evaluator({
      i1: base['0'].value,
      i2: base['1'].value,
    });

    for (let j = 0; j < indepIds.length; j++) {
      base[indepIds[j]].dependentDerivates.push({
        id: i,
        name: base[`${i}`].name,
        derivative: null,
      });
    }
  }
}

function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function incrementAll() {
  for (let j = 0; j < indepIds.length; j++) {
    base[indepIds[j]].value = base[indepIds[j]].value + base[indepIds[j]].step;
  }
}

function setOldAll() {
  for (let i = 0; i < size; i++) {
    if (base[`${i}`].independent === false) {
      base[`${i}`].oldValue = base[`${i}`].value;
    }
  }
}

function evalAll() {
  for (let i = 0; i < size; i++) {
    if (base[`${i}`].independent === false) {
      base[`${i}`].value = base[`${i}`].evaluator({
        i1: base['0'].value,
        i2: base['1'].value,
      });
    }
  }
}

function calcDerivatives() {
  for (let j = 0; j < indepIds.length; j++) {
    let depts = base[indepIds[j]].dependentDerivates;
    for (let i = 0; i < depts.length; i++) {
      depts.derivative =
        (base[`${depts[i].id}`].value - base[`${depts[i].id}`].oldValue) / base[`${j}`].step;
    }
  }
}

async function opt() {
  while (true) {
    incrementAll();
    setOldAll();
    evalAll();
    calcDerivatives();
    console.log(base['0']);
    await wait(10000);
  }
}

opt();

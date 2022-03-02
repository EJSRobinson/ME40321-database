function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function f1(v) {
  return v[0] * v[1];
}

function f2(v) {
  return v[0] + v[1];
}

const step = 0.1;
const target1 = 101; //dep target
const target2 = 30;
const relax = 0.5;
const err = 0.1;

function single(vals, ind, f, target) {
  let newVals = JSON.parse(JSON.stringify(vals));
  newVals[ind] = vals[ind] + step;
  let dd = f(newVals) - f(vals);
  let change = null;
  if (dd !== 0) {
    let delta = target - f(vals);
    let qtyOfSteps = delta / dd;
    change = step * qtyOfSteps * relax;
    val = vals[ind] + change;
  }
  return {
    val: val,
    change: change,
  };
}

vars = [
  {
    val: 20,
    change: 0,
  },
  {
    val: 3,
    change: 0,
  },
];

const speed = 600;

async function opt() {
  let count = 0;
  while (true) {
    let input = [vars[0].val, vars[1].val];

    result = single(input, count, f1, target1);
    vars[count] = result;
    //console.log(vars);
    await wait(speed);

    result = single(input, count, f2, target2);
    vars[count] = result;
    //console.log(vars);

    console.log('**-------**');
    console.log(`R1 -> ${f1([vars[0].val, vars[1].val])}`);
    console.log(`R2 -> ${f2([vars[0].val, vars[1].val])}`);
    await wait(speed);

    count = count + 1;
    if (count >= vars.length) {
      count = 0;
    }
  }
}

opt();

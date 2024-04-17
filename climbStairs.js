// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

function climbStairs(n) {
  if(n ===1) {
    return 1;
  }
  let step = new Array(n+1); // creat a array, length is n+1
  console.log(step, 'step')

  step[1] = 1;
  step[2] = 2;
  console.log(step, 'step new')

  for(let i =3; i<=n; i++) {
    step[i] = step[i-1] + step[i-2];
  }
  return step[n]
}


console.log(climbStairs(5));
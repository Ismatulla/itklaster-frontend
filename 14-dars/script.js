function countUp(n) {
  let example = 0;
  for (let i = 1; i <= n; i++) {
    example += i;
    console.log(example, 'in loop');
  }
  console.log(example, 'out loop');
  return example;
}
countUp(6);

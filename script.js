function power() {
  let a = +prompt("Enter the Base");
  let b = +prompt("Enter the Exponent");
  let aa = a || 2;
  let bb = b || 3;
  let x = aa ** bb;
  console.log(x);
  return x;
}
power();

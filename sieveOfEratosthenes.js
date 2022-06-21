/** @format */

//sieve of eratosthenes
//finding prime number in a range

let arr = [];
arr[0] = arr[1] = 0;
for (let i = 2; i <= 50; ++i) {
  arr[i] = 1;
}
console.log(arr);
for (let i = 2; i * i <= 50; ++i) {
  if (arr[i]) {
    for (let j = i * i; j <= 50; j += i) {
      if (arr[j]) arr[j] = 0;
    }
  }
}
console.log(arr);
for (let i = 0; i <= 50; ++i) {
  if (arr[i] == 1) arr[i] = i;
}
console.log(arr);
//cool i did it on the first run...the day to be remembered

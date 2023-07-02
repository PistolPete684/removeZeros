function noBoringZeros(number) {
  // 

  if (number === 0) {
    return 0;
  }

  while (number % 10 === 0) {
    number /= 10;
  }

  return number;

}
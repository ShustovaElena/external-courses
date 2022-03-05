function defineIsPrime(num) {
  let isPrime = true;

  if (num > 1000) {
    return 'Данные неверны';
  }

  if (!num || num === 0 || num === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    return `Число ${num} - простое число`;
  }

  return `Число ${num} - составное число`;
}

module.exports = defineIsPrime;

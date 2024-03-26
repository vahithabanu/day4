
//d) Do the below programs in arrow functions.Return all the prime numbers in an array

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimes = array => {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return array.filter(num => isPrime(num));
};

console.log(findPrimes(array));

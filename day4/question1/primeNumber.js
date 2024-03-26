//d)  Return all the prime numbers in an array

//Using Anonymous

/*const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimes = function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
};

console.log(findPrimes(array)); 

*/


//Using IIFE

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = (function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
})(array);

console.log(primes); 



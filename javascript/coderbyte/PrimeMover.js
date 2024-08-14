/*Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. */

// Sieve of Eratosthenes: This algorithm helps us generate a list of prime numbers up to a certain limit (maxLimit). We'll set maxLimit conservatively to ensure that we cover at least up to the 10,000th prime number.
function PrimeMover(num) {
    if (num === 1) return 2; // Special case for the 1st prime number
    if (num === 2) return 3; // Special case for the 2nd prime number
    
    let primeCount = 2; // We already know the 1st and 2nd primes (2, 3)
    let candidate = 5;   // Start checking from the next candidate prime number
    
    while (true) {
        let isPrime = true;
        // Check if candidate is prime
        for (let i = 2; i <= Math.sqrt(candidate); i++) {
            if (candidate % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primeCount++;
            if (primeCount === num) {
                return candidate;
            }
        }
        
        // Move to the next candidate (only check odd numbers greater than 3)
        candidate += 2;
    }
}

// Test cases
console.log(PrimeMover(16)); // Output: 53
console.log(PrimeMover(10000)); // Output: 104729

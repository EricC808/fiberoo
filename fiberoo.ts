function fib() 
{
    let fibArray = [0, 1]; // Initialize with the first two Fibonacci numbers

    for (let i = 2; i < 50; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]); // Calculate next Fibonacci number
    }

    return fibArray;
}

console.log(fib()); // Prints the first 50 Fibonacci numbers


function numsToString(nums: number[]): string[]
{
    return nums.map(x => x.toString()); // Convert array to string with comma separator
}

console.log(numsToString(fib()));

function numEvenNums(nums: number[]): number
{
    return nums.filter(num => num % 2 === 0).length; // Filter even numbers and count them
}

console.log(numEvenNums(fib()));
const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const lowest = getMin(heights2);
console.log('lowest number is: ', lowest);
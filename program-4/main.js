function sortArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(sortArray(left), sortArray(right));
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Generate an array of 50000 random numbers
const arr = Array.from({length: 50000}, () => Math.floor(Math.random() * 100000));

// Measure the time taken to sort the array
const t0 = performance.now();
sortArray(arr);
const t1 = performance.now();

// Log the time taken to the console
console.log(`Time taken to sort array of 50000 elements: ${t1 - t0} milliseconds`);
function sumOfDistinctElements(set1, set2) {
    const distinctElements = new Set();

    // Add elements from the first set
    for (const element of set1) {
        distinctElements.add(element);
    }

    // Add elements from the second set
    for (const element of set2) {
        distinctElements.add(element);
    }

    // Calculate the sum of distinct elements
    let sum = 0;
    for (const element of distinctElements) {
        sum += element;
    }

    return sum;
}

// Example usage
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const result = sumOfDistinctElements(set1, set2);
console.log(result); // Outputs: 21 (1 + 2 + 3 + 4 + 5 + 6)
// Procedure:`Dot production`
function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length");
    }
    
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    
    return ps;
}


function calculateDotProduct(A, B) {
    if (A.length !== B.length) {
        throw new Error("Arrays must be of equal length");
    }
    
    let dotProduct = 0;
    for (let i = 0; i < A.length; i++) {
        dotProduct += A[i] * B[i];
    }
    
    return dotProduct;
}

const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];
const result = calculateDotProduct(vectorA, vectorB);
console.log(result); // Outputs: 32 (1*4 + 2*5 + 3*6)

/**
 * Applies Ruffini's rule to a polynomial to find the reduced coefficients.
 *
 * @param {number} root - The root value to apply in Ruffini's rule.
 * @param {number[]} coefficients - An array representing the coefficients of the polynomial.
 * @returns {number[]} - An array containing the reduced coefficients after applying Ruffini's rule.
 */
function calculateReducedCoefficients(root, coefficients) {
    const reducedCoefficients = [];

    coefficients.forEach((coefficient, i) => {
        if (i + 1 > coefficients.lenght) return;

        if (i === 0) {
            const value = coefficient;
            reducedCoefficients.push(value);

            return;
        }

        const value = reducedCoefficients[i - 1] * root + coefficient;
        reducedCoefficients.push(value);
    });

    return reducedCoefficients;
}

module.exports = calculateReducedCoefficients;

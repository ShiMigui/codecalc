/**
 * Calculates the exponential function e^x using the Taylor series.
 * @param {number} x - The exponent.
 * @returns {number} Approximated value of e^x.
 */
function taylorExponential(x) {
    let term = 1;
    let sum = 1;

    for (let n = 1; n < MAX_ITER; n++) {
        term *= x / n;
        sum += term;
        if (Math.abs(term) < TOLERANCE) break;
    }

    return sum;
}

const e = x => taylorExponential(x);
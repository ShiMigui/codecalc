/**
 * Calculates the natural logarithm number using Taylor series.
 * @param {Number} x - Number to calculate the natural logarithm of.
 * @returns {Number} Approximated value of ln(x)
 */
function ln(x) {
    if (x <= 0) throw new Error("MATH ERROR");
    if (x === 1) return 0;

    const FRAC = (x - 1) / (x + 1);
    let power = FRAC;
    let result = 0;

    for (let i = 0; i < MAX_ITER; i++) {
        const DENOM = 2 * i + 1;
        const TERM = power / DENOM;
        result += TERM;
        if(TERM < TOLERANCE) break;

        power *= FRAC ** 2;
    }

    return 2 * result;
}
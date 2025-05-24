/**
 * Calculates the root of a number of a given index.
 * @param {Number} value - The number to calculate root of.
 * @param {Number} index - The root's index.
 * @returns {Number} The result of index^√value
 */
function root(value, index = 2) {
    if (index === 0) throw new Error("Index zero");
    if (value < 0 && index % 2 === 0) throw new Error("Invalid root");
    if (value === 0) return 0;

    let x = value > 1 ? value : 1;
    const INDEX_MINUS_ONE = index - 1;

    for (let i = 0; i < MAX_ITER; i++) {
        const PREVIOUS_X = x;
        const EXPONENTIAL = Math.pow(x, INDEX_MINUS_ONE);
        x = x - (EXPONENTIAL * x - value) / (index * EXPONENTIAL);

        if (Math.abs(x - PREVIOUS_X) < TOLERANCE) break;
    }

    return x;
}
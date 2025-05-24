/**
 * Calculates the factorial of a non-negative number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 * @throws {Error} If the number is negative.
 */
function factorial(n) {
    if (n < 0) throw new Error("Negative factorial");
    let s = 1;
    while (n > 1) s *= n--;
    return s;
}
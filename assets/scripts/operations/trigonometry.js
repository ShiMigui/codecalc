/**
 * Calculates cosine or sine of a number (in radians) using Taylor Polynomial series.
 * @param {number} value - The number in radians.
 * @param {number} shift - 0 for cosine, 1 for sine.
 * @returns {number} The approximated value of sin(x) or cos(x).
 */
function taylorCosAndSin(value, shift = 0) {
    if(Math.abs(value - PI) < TOLERANCE) return shift - 1;

    const IS_SEN = shift === 1;

    value %= 2 * PI;
    if (value > PI) value -= 2 * PI;

    let result = IS_SEN ? value : 1;
    let sign = -1;
    let num = result;
    let denom = 1;

    for (let n = 1; n < MAX_ITER; n++) {
        const EXP = 2 * n + shift;

        num *= value * value;
        denom *= (EXP - 1) * EXP;

        const TERM = sign * num / denom;
        result += TERM;

        if (Math.abs(TERM) < TOLERANCE) break;

        sign *= -1;
    }

    return result;
}

const sin = x => taylorCosAndSin(x, 1);
const cos = x => taylorCosAndSin(x, 0);
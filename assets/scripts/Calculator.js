export default class Calculator {
    #expression;
    #result;

    /**
     * 
     * @param {HTMLInputElement} $expression 
     * @param {HTMLInputElement} $result 
     */
    constructor($expression, $result) {
        this.#expression = $expression;
        this.#result = $result;
    }

    get expression() {
        return this.#expression.value;
    }

    get expressionLength() {
        return this.expression.length;
    }

    /**
     * Adds a character to the expression
     * @param {string} char - Character to add
     */
    addChar(char) {
        if (this.isOperator(char) && !this.#shouldAddOperator(char)) return;
        this.#expression.value += char;
    }

    #shouldAddOperator(char) {
        if (this.isExpressionEmpty()) return char === '-';

        const lastChar = this.getLastChars();
        if (!this.isOperator(lastChar)) return true;
        if (this.expressionLength === 1) return false;

        const exp = this.getLastChars(2) === '**';
        if (char === '*' && lastChar === '*') return !exp;

        this.delLastChars(exp ? 2 : 1);
        return true;
    }

    /**
     * Gets the last N characters of the expression
     * @param {number} [count=1] - Number of characters to get
     * @returns {string}
     */
    getLastChars(count = 1) {
        return this.expression.slice(-count);
    }

    /**
     * Removes the last N characters from the expression
     * @param {number} [count=1] - Number of characters to remove
     */
    delLastChars(count = 1) {
        this.#expression.value = this.expression.slice(0, -count);
    }

    /**
     * Evaluates the current expression
     */
    evaluate() {
        let message = '';
        try {
            const expression = this.expression
                .replace(/\^/g, '**')
                .replace(/(\d+)\(/g, '$1*(')
                .replace(/\)(\d+)/g, ')*$1')
                .replace(/(\d+)\s*√\s*(\([^()]+\)|\d+)/g, (_, n, x) => `root(${x}, ${n})`)
                .replace(/(\([^)]+\)|\d+)!/g, 'factorial($1)');
                
            console.log(expression);
            message = eval(expression);
            this.#expression.value = '';
        } catch (e) {
            message = `Error: ${e}`;
        } finally {
            this.#result.value = message;
        }
    }

    /**
     * Clears both expression and result
     */
    clearAll() {
        this.#expression.value = '';
        this.#result.value = '';
    }

    isOperator(char, operators = ['+', '-', '*', '/', '^']) {
        return operators.includes(char);
    }

    isLastCharacterAnOperator() {
        return this.isOperator(this.getLastChars());
    }

    isExpressionEmpty() {
        return this.expression === '';
    }
}
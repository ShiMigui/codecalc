import Calculator from './Calculator.js';

const $calculator = document.getElementById('calculator');
const $expression = $calculator.querySelector('#expression');
const $result = $calculator.querySelector('#result');

const calc = new Calculator($expression, $result);

const keys = {
    '0': () => calc.addChar('0'),
    '1': () => calc.addChar('1'),
    '2': () => calc.addChar('2'),
    '3': () => calc.addChar('3'),
    '4': () => calc.addChar('4'),
    '5': () => calc.addChar('5'),
    '6': () => calc.addChar('6'),
    '7': () => calc.addChar('7'),
    '8': () => calc.addChar('8'),
    '9': () => calc.addChar('9'),
    '.': () => calc.addChar('.'),
    '(': () => calc.addChar('('),
    ')': () => calc.addChar(')'),
    '+': () => calc.addChar('+'),
    '-': () => calc.addChar('-'),
    '*': () => calc.addChar('*'),
    '/': () => calc.addChar('/'),
    '^': () => calc.addChar('^'),
    'r': () => calc.addChar('√'),
    '2√': () => calc.addChar('2√'),
    'c': () => calc.addChar('cos('),
    's': () => calc.addChar('sin('),
    'l': () => calc.addChar('ln('),
    'f': () => calc.addChar('!'),
    'e': () => calc.addChar('e('),
    'E': () => calc.addChar('E'),
    'P': () => calc.addChar('PI'),
    'Backspace': () => calc.delLastChars(),
    'Escape': () => calc.clearAll(),
    'Enter': () => calc.evaluate()
};

$calculator.querySelectorAll('button').forEach($ => $.addEventListener('click', _ => keys[$.dataset.key]()))

document.addEventListener('keydown', e => {
    let { key, shiftKey, code } = e;

    if (key === 'Dead' && shiftKey) {
        key = {
            'Digit1': 'f',
            'Quote': '^'
        }[code] ?? key
    }
    const fn = keys[key];
    if (typeof fn === 'function') fn();
});
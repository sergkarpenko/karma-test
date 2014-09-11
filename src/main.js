/**
 * Base calculator
 *
 * @constructor
 */
function Calculator() {

}

/**
 * Calculates two numbers
 * @param a {integer}
 * @param b {integer}
 * @returns {integer}
 */
Calculator.prototype.add = function(a, b) {
    return a + b;
}
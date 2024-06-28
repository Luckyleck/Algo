/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentVal = init;
    const initialVal = init;
    return {
        increment: () => {
            return ++currentVal;
        },
        decrement: () => {
            return --currentVal;
        },
        reset: () => {
            currentVal = initialVal;
            return currentVal;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
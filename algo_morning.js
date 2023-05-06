function myFunction() {

    const { performance } = require('perf_hooks');
    const start = performance.now();

    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

// Turn on for debugging
// myFunction();
module.exports = { myFunction }

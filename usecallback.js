


function factory() {
    return (a, b) => a + b;
}

const sum1 = factory();
const sum2 = factory();

sum1(1, 2); // => 3
sum2(1, 2); // => 3


console.log(sum1 === sum2); // => false
console.log(sum1 === sum1); // => true

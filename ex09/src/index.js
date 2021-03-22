// Only change code below this line

const product = (aa, bb, cc) => {
    const args = [aa, bb, cc];


    // Only change code above this line

    return args.reduse((a, b) => a * b, 1);
}

console.log(product()); // Change this line
module.exports = product;
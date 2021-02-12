function productSum(arr, level = 1) {
    let sum = 0;

    for (const element of arr) {
        if (element.length) {
            sum += productSum(element, level + 1);
        } else {
            sum += element;
        }
    }
    return sum * level;
}


function productSumTest() {

    const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    const sum = productSum(arr);
    console.log(sum);//12
}

productSumTest();



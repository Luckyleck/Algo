// iterative approach

const summation = (num) => {
    let sum = 0;

    let i = 1;
    while (i <= num) {
        sum += i
    }

    return sum
}

// recursive approach

const summation = (num) => {
    if (num === 1) {
        return 1;
    }

    return num + summation(num - 1);
}
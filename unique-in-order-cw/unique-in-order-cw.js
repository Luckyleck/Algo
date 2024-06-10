const uniqueInOrder = (str) => {

    const letterSet = new Set();

    str.split("").forEach((letter) => {
        letterSet.add(letter);
        console.log(letterSet.values())
    })

    return Array.from(letterSet.values())

}


// actual solution
const uniqueInOrder = (str) => {

    const finalArray = [];

    for (let i = 0; i < str.length; i++) {

        if (str[i + 1] !== str[i]) {
            finalArray.push(str[i]);
        }
    }

    return finalArray
}
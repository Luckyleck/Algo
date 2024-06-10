const uniqueInOrder = (str) => {

    const letterSet = new Set();

    str.split("").forEach((letter) => {
        letterSet.add(letter);
        console.log(letterSet.values())
    })

    return Array.from(letterSet.values())

}
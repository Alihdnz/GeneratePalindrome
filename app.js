function generateRandomString(size) {
    var randomString = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i < size; i++) {
        randomString += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return randomString;
}

function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("")

    return joinArray;
}



while (generateRandomString(7) !== reverseString(generateRandomString(7)) ){
    var strDefault = generateRandomString(7)
    var strReverse = reverseString(strDefault)

    if (strReverse == strDefault) {
        break;
    }
    
}

console.log(strDefault)
console.log(strReverse)





const thingsArr = process.argv.slice(2)

let tLength = thingsArr.length

let longestNameLength = 0

let boxit = ''

//find the longest name length
for (let i = 0; i < tLength; i++){
    if (thingsArr[i].length> longestNameLength){
        longestNameLength = thingsArr[i].length
    }
}
//No arguments
if (tLength == 0){
    boxit += '\u250F'+'\u2513'+'\n'+'\u2517'+'\u251B'
}
//One argument
else if (tLength == 1){
    boxit += '\u250F' + '\u2501'.repeat(longestNameLength) + '\u2513' + '\n' + '\u2503' + thingsArr[0] + '\u2503' + '\n' + '\u2517'+'\u2501'.repeat(longestNameLength) + '\u251B'
}
// two or more arguments
else if(tLength >=2) {
    //initial the name during the loop
    let currentNameLen = 0
    //add the box top to boxit String
    boxit += '\u250F' + '\u2501'.repeat(longestNameLength) + '\u2513' + '\n'
    //add |names and fill the reset of the space with blank| without adding the last name
    for (let boxHeight= 0; boxHeight< tLength -1; boxHeight++){
        currentNameLen = thingsArr[boxHeight].length
        boxit += '\u2503' + thingsArr[boxHeight] + ' '.repeat(longestNameLength - currentNameLen)  + '\u2503' + '\n' + '\u2523' + '\u2501'.repeat(longestNameLength) + '\u252B'+'\n'
    }
    //add |last name and blank with the box bottom
    let lastNamelen = thingsArr[tLength - 1].length
    boxit += '\u2503' + thingsArr[tLength - 1] + ' '.repeat(longestNameLength - lastNamelen) + '\u2503' + '\n' + '\u2517' + '\u2501'.repeat(longestNameLength) + '\u251B'
}
//Output the boxed String.
console.log(boxit)

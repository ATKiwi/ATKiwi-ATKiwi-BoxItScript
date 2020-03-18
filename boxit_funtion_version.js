const thingsArr = process.argv.slice(2)

let tLength = thingsArr.length

let longestNameLength = 0

let boxit = ''

//find the longest name length
for (let i = 0; i < tLength; i++) {
    if (thingsArr[i].length > longestNameLength) {
        longestNameLength = thingsArr[i].length
    }
}

function drawLine(num){
    return '\u2501'.repeat(num)
}

function drawTopBorder(num){
    let str = '\u250F' + '\u2501'.repeat(num) + '\u2513'
    return  str
}
function drawMiddleBorder(num){
    let str = '\u2523' + '\u2501'.repeat(num) + '\u252B'
    return str
}
function drawBottomBorder(num){
    let str = '\u2517' + '\u2501'.repeat(num) + '\u251B'
    return str
}
function drawBarsAround(string){
    let strLen = string.length
    let str = '\u2503' + string + " ".repeat(longestNameLength - strLen) + '\u2503'
    return str
}
function boxIt(strArr){
    let strLen = strArr.length
    let str = ''
    if (strLen == 0){
        str = drawTopBorder(strLen) + "\n" + drawBottomBorder(strLen)
        return str
    }
    else if (strLen == 1 ){
        str = drawTopBorder(longestNameLength) + "\n" + drawBarsAround(thingsArr[0])+ "\n" + drawBottomBorder(longestNameLength)
        return str
    }
    else {
        str += drawTopBorder(longestNameLength) + "\n"
        for (let i = 0; i < strLen - 1; i++) {
            str += drawBarsAround(strArr[i]) + "\n"
            str += drawMiddleBorder(longestNameLength) + "\n"
        }
        str += drawBarsAround(strArr[strLen-1]) + "\n"
        str += drawBottomBorder(longestNameLength)
        return str
    }
}
console.log(boxIt(thingsArr))
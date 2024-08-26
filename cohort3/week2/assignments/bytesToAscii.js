function asciString(bytes){
    return bytes.map(byte => String.fromCharCode(byte)).join('')
}


const bytes = [72, 101, 108, 108, 111];

const asciiword = asciString(bytes);
console.log(asciiword);
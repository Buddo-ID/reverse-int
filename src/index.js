module.exports = function reverse (n) {
    let mod = Math.abs(n);
    let str = mod.toString();
    let result = ''; 
    
    for (let i = 0; i < str.length; i = i + 1) {
        result = `${str[i]}${result}`;
    }

    return Number(result);

};

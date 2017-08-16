var Cipher = function(key){
    if (key !== undefined && (key.length === 0 || key.match(/[^a-z]/, 'g'))){
        throw Error('Bad key');
    }
    this.key = key || generateKey();
}

var alpha = 'abcdefghijklmnopqrstuvwxyz';

var generateKey = function(){
    ret = '';
    while (ret.length < 100)
        ret += alpha[Math.floor(Math.random() * alpha.length)];
    return ret;
};

var morphChar = function(letter, keyChar, mod) {
    var c = letter.charCodeAt(0) + (alpha.indexOf(keyChar) * mod);
    if (c > 'z'.charCodeAt(0))
        c -= alpha.length
    if (c < 'a'.charCodeAt(0))
        c += alpha.length
    return String.fromCharCode(c)
}

Cipher.prototype.encode = function(input) {
    ret = ''
    for (letter in input)
        ret += morphChar(input[letter], this.key[letter % this.key.length], 1)
    return ret
}

Cipher.prototype.decode = function(input) {
    ret = ''
    for (letter in input)
        ret += morphChar(input[letter], this.key[letter % this.key.length], -1)
    return ret
}

module.exports = Cipher

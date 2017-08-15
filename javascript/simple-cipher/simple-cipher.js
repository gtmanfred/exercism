var characters = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
    this.key = key || generateKey();
}

function generateKey() {
    var randomKey = '';
    for (i = 0; i < 100; i++) { randomKey += characters[Math.floor(Math.random() * characters.length)];}
    return randomKey;
}

if (module) {
    module.exports = Cipher;
};

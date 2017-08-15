var translations = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

var Rna = function() {};

Rna.prototype.toRna = function(input) {
    return input.split('').map(translate).join('');
};

function translate(nucleotide) {
    if (nucleotide in translations) {
        return translations[nucleotide];
    };
    throw Error('Invalid input');
};

if (module) {
  module.exports = Rna;
}

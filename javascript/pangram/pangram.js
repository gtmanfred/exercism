module.exports = function(input) {
    return {
        'isPangram': function() {
            var alpha = 'abcdefghijklmnopqrstuvwxyz'
            for (index in alpha)
                if (!input.toLowerCase().includes(alpha[index]))
                    return false;
            return true
        }
    };
};

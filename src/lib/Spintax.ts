String.prototype.spintax = function() {
    const processSpintax = (text) => {
        return text.replace(/\(([^()]+)\)/g, (match, options) => {
            const choices = options.split('|');
            return choices[Math.floor(Math.random() * choices.length)];
        });
    };
    return processSpintax(this);
}
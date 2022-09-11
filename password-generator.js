var generator = require('generate-password')
var password = generator.generate(
    {
        length: 22,
        numbers: true,
        symbols: true
    }
)
console.log(password)
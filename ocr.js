var Tesseract = require('tesseract.js')
var myImage = "quote.jpg"
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result.text)
})



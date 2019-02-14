var Tesseract = require('tesseract.js')
var myImage = "F:/Pratiksha/Documents/Postman/image.jpg"
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result.text)
})

var Tesseract = require('tesseract.js')
var myImage = "C:/Users/kamal.uniyal/source/repos/OCR_Aspose/OCR_Aspose/img2.jpg"
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result.text)
})
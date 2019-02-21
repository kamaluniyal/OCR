const ocrSpaceApi = require('ocr-space-api');


var options =  {

    apikey: '0a64c6013088957',
    language: 'eng',
    imageFormat: 'image/png',
    isOverlayRequired: true
  };

const imageFilePath = "adventure2.jpg";

ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)

  .then(function (parsedResult) {

    console.log('parsedText: \n', parsedResult.parsedText);
    console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);

  }).catch(function (err) {

    console.log('ERROR:', err);

  });

const fs = require('fs');
const AWS = require('aws-sdk');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Multer middleware for handling multipart/form-data

function uploadSecondImageS3(req, res) {
    return new Promise((resolve, reject) => {
        const { image1 } = req.body;
        if(image1.startsWith('https://')) {
            return resolve(image1);
        }
        // Remove the header (data:image/jpeg;base64,)
        const base64Data = image1.replace(/^data:image\/\w+;base64,/, '');
      
        // Create a buffer from the base64 string
        const imageBuffer = Buffer.from(base64Data, 'base64');
      
        // Generate a unique file name with '.jpg' extension
        const fileName = `image_${Date.now()}.jpg`;
    
        const awsConfig = {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION,
        };
    
        const params = {
          Bucket: 'smile-dental-buckett',
          Key: `images/${fileName}`,
          Body: imageBuffer, 
          ContentType: 'image/jpeg',
          Metadata: {
            'Content-Disposition': 'inline',
          }
        };
        const s3 = new AWS.S3(awsConfig);
    
        s3.upload(params, (err, data) => {
          if (err) {
            console.error(err);
            reject('Error while uploading 2nd file to S3.');
          } else {
            resolve(data.Location);
          }
        });
    });
}

module.exports = { uploadSecondImageS3 };

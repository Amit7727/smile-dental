// TODO

// in our services, Need to change table content image_alt_text to service_image_alt_text
// Need to change api for home page card secion, Need one api for all 3 card in for array
// our service image linksneed to update
// map location api need to change, need to remoe lati and longti, need to put location URL field


const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

function saveBase64ImageToFile(base64String, fileName) {
    // Remove the header (data:image/jpeg;base64,)
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
    // Create a buffer from the base64 string
    const imageBuffer = Buffer.from(base64Data, 'base64');
  
    // Write the buffer to a file
    fs.writeFile(fileName, imageBuffer, (err) => {
      if (err) {
        console.error('Error saving image:');
      } else {
        console.log('Image saved successfully:');
      }
    });
  }




  
smileRouter.post('/testimonials',upload.single('image'), async (req, res) => {

    console.log('calling function')
    saveBase64ImageToFile(req.body.image, `ANy`)
    await createTestmonialsService(req, res)
})
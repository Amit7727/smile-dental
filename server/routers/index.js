const express = require('express')
const smileRouter = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'uploads/', limits: { fieldSize: 25 * 1024 * 1024 } });
const logger = require('winston').loggers.get('app')
const loginUserService = require('../service/loginUserService')
const registerUserService = require('../service/registerUserService')
const getCarouselService = require('../service/getCarouselService')
const updateCarouselService = require('../service/updateCarouselService')
const getScheduleHoursService = require('../service/getScheduleHoursService')
const updateScheduleHoursService = require('../service/updateScheduleHoursService')
const getAboutUsService = require('../service/getAboutUsService')
const updateAboutUsService = require('../service/updateAboutUsService')
const getTestmonialsService = require('../service/gettestimonialsService')
const updateTestmonialsService = require('../service/updateTestmonialsService')
const createTestmonialsService = require('../service/createTestmonialsService')
const deleteTestmonialsService = require('../service/deleteTestmonialsService')
const updateOurServiceService = require('../service/updateOurServiceService')
const getOurServiceService = require('../service/getOurServiceService')
const getBlogsService = require('../service/getBlogsService')
const updateBlogsService = require('../service/updateBlogsService')
const createBlogsService = require('../service/createBlogsService')
const deleteBlogsService = require('../service/deleteBlogsService')
const getLocationService = require('../service/getLocationService')
const updateLocationService = require('../service/updateLocationService')
const getHeadersService = require('../service/getHeadersService')
const updateHeadersService = require('../service/updateHeadersService')
const getFooterService = require('../service/getFooterService')
const updateFooterService = require('../service/updateFooterService')
const getMetaDataService = require('../service/getMetaDataService')
const updateMetaDataService = require('../service/updateMetaDataService')
const postQueryService = require('../service/postQueryService')
const getQueryService = require('../service/getQueryService')
const deleteQueryService = require('../service/deleteQueryService')
const getAboutUsPersonalInformationService = require('../service/getAboutUsPersonalInformationService')
const updateAboutUsPersonalInformationService = require('../service/updateAboutUsPersonalInformationService')
const getCardsByPageName = require('../service/getCardsByPageName')
const updateCardsService = require('../service/updateCardsService')
const getHomePageCardsService = require('../service/getHomePageCardsService')
const getAllCardsService = require('../service/getAllCardsService')
const getMakeAppointmentService = require('../service/getMakeAppointmentService')
const updateMakeAppointmentService = require('../service/updateMakeAppointmentService')
const updatePhoneService = require('../service/updatePhoneService')
const getPhoneService = require('../service/getPhoneService')
const updateImageGalleryService = require('../service/updateImageGalleryService')
const getImageGalleryService  = require('../service/getImageGalleryService')
const  forgotPasswordService  = require('../service/auth/forgotPasswordService')

const loggerInfo = require('../helper/loggerInfo')


// demo
smileRouter.get('/', async (req, res) => {
    logger.info(loggerInfo(req, res))
    logger.info('Hello from xcare server')
    res.send('Hello from xcare server')
})

// login
smileRouter.post('/login', async (req, res) => {
    logger.info(loggerInfo(req, res))

    await loginUserService(req, res)
})

// Register user
smileRouter.post('/register',async (req, res) => {
    logger.info(loggerInfo(req, res))
    await registerUserService(req, res)
})


// Get All Carousel
smileRouter.get('/carousel', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getCarouselService(req, res)
})

smileRouter.put('/carousel/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateCarouselService(req, res)
}) 

// Schedule Hours

smileRouter.get('/schedule_hours', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getScheduleHoursService(req, res)
})

smileRouter.put('/schedule_hours/:id', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateScheduleHoursService(req, res)
})

// Get About Us Page Data
smileRouter.get('/about_us', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getAboutUsService(req, res)
})

smileRouter.put('/about_us/:id',upload.none(), async (req, res) => {
    logger.info(req.body.image1)
    logger.info(loggerInfo(req, res))
    await updateAboutUsService(req, res)
})

// Get ALL TESTIMONIALS
smileRouter.get('/testimonials', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getTestmonialsService(req, res)
})

smileRouter.put('/testimonials/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateTestmonialsService(req, res)
})

smileRouter.post('/testimonials',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await createTestmonialsService(req, res)
})

smileRouter.delete('/testimonials/:id', async (req, res) => { 
    logger.info(loggerInfo(req, res))
    await deleteTestmonialsService(req, res)
})

// Get ALL OUR SERVICE
smileRouter.get('/our_services', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getOurServiceService(req, res)
})

smileRouter.put('/our_services/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateOurServiceService(req, res)
})

// Get ALL blogs
smileRouter.get('/blogs', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getBlogsService(req, res)
})

smileRouter.put('/blogs/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateBlogsService(req, res)
})

smileRouter.post('/blogs',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await createBlogsService(req, res)
})

smileRouter.delete('/blogs/:id', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await deleteBlogsService(req, res)
})

// Get Locations
smileRouter.get('/locations', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getLocationService(req, res)
})

smileRouter.put('/locations/:id', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateLocationService(req, res)
})

// get Headers
smileRouter.get('/headers', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getHeadersService(req, res)
})

smileRouter.put('/headers/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateHeadersService(req, res)
})

// get Footer
smileRouter.get('/footer', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getFooterService(req, res)
})

smileRouter.put('/footer/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateFooterService(req, res)
})

// get metadata
smileRouter.get('/metadata', async (req, res) => {
    logger.info(loggerInfo(req, res))
    getMetaDataService(req, res)
})

smileRouter.put('/metadata/:id', async (req, res) => {
    logger.info(loggerInfo(req, res))
    updateMetaDataService(req, res)
})

// Inqury form for contact_Us or About us
smileRouter.post('/inquiry_form', async (req, res) => {
    logger.info(loggerInfo(req, res))
    postQueryService(req, res)
})

smileRouter.get('/inquiry_form', async (req, res) => {
    logger.info(loggerInfo(req, res))
    getQueryService(req, res)
})

smileRouter.delete('/inquiry_form/:id', async (req, res) => {
    logger.info(loggerInfo(req, res))
    deleteQueryService(req, res)
})
// about us page personal information
smileRouter.get('/about_us/personal_information', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getAboutUsPersonalInformationService(req, res)
})

smileRouter.put('/about_us/personal_information/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateAboutUsPersonalInformationService(req, res)
})


smileRouter.get('/cards/:page_name', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getCardsByPageName(req, res)
})

smileRouter.get('/cards', async (req, res) =>{
    logger.info(loggerInfo(req, res))
    await getAllCardsService(req, res)
})

smileRouter.put('/cards/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateCardsService(req, res)
})

smileRouter.get('/homepage_cards', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getHomePageCardsService(req, res)
})

smileRouter.get('/make_appointment', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getMakeAppointmentService(req, res)
})

smileRouter.put('/make_appointment/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateMakeAppointmentService(req, res)
})

smileRouter.put('/phone', async (req, res) => {
    logger.info(loggerInfo(req, res))
    if(req.body.phone_number === '' || req.body.phone_number === undefined || req.body.phone_number === null) {
        return res.status(400).json({ error: 'phone_number number is required' })
    }
    await updatePhoneService(req, res)
})
smileRouter.get('/phone', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getPhoneService(req, res)
})

// update image gallery
smileRouter.put('/image_gallery/:id',upload.none(), async (req, res) => {
    logger.info(loggerInfo(req, res))
    await updateImageGalleryService(req, res)
})

smileRouter.get('/image_gallery', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await getImageGalleryService(req, res)
})

smileRouter.post('/forgot-password', async (req, res) => {
    logger.info(loggerInfo(req, res))
    await forgotPasswordService(req, res)
})

module.exports = smileRouter
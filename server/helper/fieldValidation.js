
function validatePostQueryBody(req, res) {
    const err = []
    const { name, email,phone_number,subject, message } = req.body
    
    if(!name) {
        err.push('Name is required')
    }
    if(!email) {
        err.push('Email is required')
    }
    if(!phone_number) {
        err.push('Phone number is required')
    }
    if(!subject) {
        err.push('Subject is required')
    }
    if(!message) {
        err.push('Message is required')
    }
    
    return err
}

function validatePostAboutUs(req, res) {
    const err = []

    const { title, description,image, image1, front_image_alt_text, back_image_alt_text } = req.body

    if(!title) {
        err.push('Title is required')
    }
    if(!description) {
        err.push('Description is required')
    }
    if(!image) {
        err.push('Image (front image) is required')
    }
    if(!image1) {
        err.push('Image1 (back image) is required')
    }
    if(!front_image_alt_text) {
        err.push('Front image alt text is required')
    }
    if(!back_image_alt_text) {
        err.push('Back image alt text is required')
    }
    return err

}

function validateCreateUpdateBlog(req, res) {
    const { blog_title,image, blog_description, blog_image_alt_text, created_by } = req.body

    const err = []

    if(!blog_title) {
        err.push('Blog title is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    if(!blog_description) {
        err.push('Blog description is required')
    }
    if(!blog_image_alt_text) {
        err.push('Blog image alt text is required')
    }
    if(!created_by && req.method === 'POST') {
        err.push('Created by is required')
    }
    return err
}

function validateUpdateCarousel(req, res) {
    const { title, description,page_name, image, image_alt_text } = req.body
    const err = []
    if(!title) {
        err.push('Title is required')
    }
    if(!description) {
        err.push('Description is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    if(!image_alt_text) {
        err.push('Image alt text is required')
    }
    if(!page_name) {
        err.push('Page name is required')
    }
    return err
}

function validateCreateUpdateTestimonial(req, res) {
    const { client_name,image, client_rating, client_feedback, client_feedback_description, client_image_alt_text } = req.body
    const err = []
    if(!client_name) {
        err.push('Client name is required')
    }
    if(!client_rating) {
        err.push('Client rating is required')
    }
    if(!client_feedback) {
        err.push('Client feedback is required')
    }
    if(!client_feedback_description) {
        err.push('Client feedback description is required')
    }
    if(!client_image_alt_text) {
        err.push('Client image alt text is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateUpdateScheduleHours(req, res) {
    const { title, start_day, end_day, start_time, end_time } = req.body
    const err = []
    if(!title) {
        err.push('Title is required')
    }
    if(!start_day) {
        err.push('Start day is required')
    }
    if(!end_day) {
        err.push('End day is required')
    }
    if(!start_time) {
        err.push('Start time is required')
    }
    if(!end_time) {
        err.push('End time is required')
    }
    return err
}

function validateUpdateOurService(req, res) {
    const { service_name,image, service_description, image_alt_text } = req.body
    const err = []
    if(!service_name) {
        err.push('Service name is required')
    }
    if(!service_description) {
        err.push('Service description is required')
    }
    if(!image_alt_text) {
        err.push('Image alt text is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateUpdateMetaData(req, res) {
    const { page_name, meta_title, meta_description } = req.body
    const err = []
    if(!page_name) {
        err.push('Page name is required')
    }
    if(!meta_title) {
        err.push('Meta title is required')
    }
    if(!meta_description) {
        err.push('Meta description is required')
    }
    return err
}

function validateUpdateMakeAppointmentCard(req, res) {
    const { heading, description, image_alt_text , image} = req.body
    const err = []
    if(!heading) {
        err.push('Heading is required')
    }
    if(!description) {
        err.push('Description is required')
    }
    if(!image_alt_text) {
        err.push('Image alt text is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateUpdateLocation(req, res) {
    const { tag } = req.body
    const err = []
    if(!tag) {
        err.push('src or tag  is required')
    }
    return err
}

function validateUpdateHeaders(req, res) {
    const {image, page_name, page_url, logo_image_alt_text } = req.body
    const err = []
    if(!image) {
        err.push('Image is required')
    }
    if(!page_name) {
        err.push('Page name is required')
    }
    if(!page_url) {
        err.push('Page url is required')
    }
    if(!logo_image_alt_text) {
        err.push('Logo image alt text is required')
    }
    return err
}

function validateUpdateFooter(req, res) {
    const { image, title, image_alt_text, description } = req.body
    const err = []
    if(!title) {
        err.push('Title is required')
    }
    if(!image_alt_text) {
        err.push('Image alt text is required')
    }
    if(!description) {
        err.push('Description is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateUpdateCards(req, res) {
    const {image, page_name, card_logo_alt_text, card_title, card_description1, card_description2 } = req.body
    const err = []
    if(!page_name) {
        err.push('Page name is required')
    }
    if(!card_logo_alt_text) {
        err.push('Card logo alt text is required')
    }
    if(!card_title) {
        err.push('Card title is required')
    }
    if(!card_description1) {
        err.push('Card description1 is required')
    }
    if(!card_description2) {
        err.push('Card description2 is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateAboutUsPersonalInformation(req, res) {
    const {image, name, specially, phone_number, email, experience, degrees, professional_summary, image_alt_text } = req.body
    const err = []
    if(!name) {
        err.push('Name is required')
    }
    if(!specially) {
        err.push('Specially is required')
    }
    if(!phone_number) {
        err.push('Phone number is required')
    }
    if(!email) {
        err.push('Email is required')
    }
    if(!experience) {
        err.push('Experience is required')
    }
    if(!degrees) {
        err.push('Degrees is required')
    }
    if(!professional_summary) {
        err.push('Professional summary is required')
    }
    if(!image_alt_text) {
        err.push('Image alt text is required')
    }
    if(!image) {
        err.push('Image is required')
    }
    return err
}

function validateRegisterUser(req, res) {
    const { first_name,last_name, email, password, full_name, phone_number } = req.body
    const err = []
    if(!first_name) {
        err.push('First name is required')
    }
    if(!last_name) {
        err.push('Last name is required')
    }
    if(!email) {
        err.push('Email is required')
    }
    if(!password) {
        err.push('Password is required')
    }
    if(!full_name) {
        err.push('Full name is required')
    }
    if(!phone_number) {
        err.push('Mobile number is required')
    }
    return err
}


module.exports = { 
    validateUpdateCarousel, 
    validatePostQueryBody, 
    validatePostAboutUs, 
    validateCreateUpdateBlog,
    validateCreateUpdateTestimonial,
    validateUpdateScheduleHours,
    validateUpdateOurService,
    validateUpdateMetaData,
    validateUpdateMakeAppointmentCard,
    validateUpdateLocation,
    validateUpdateHeaders,
    validateUpdateFooter,
    validateUpdateCards,
    validateAboutUsPersonalInformation,
    validateRegisterUser
}
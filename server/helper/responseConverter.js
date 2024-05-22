function mapConverterResult(result) {
    return result.map((item) => {
        return {
            id: item.id,
            page_name: item.page_name,
            page_url: item.page_url,
            logo_image_alt_text: item.logo_image_alt_text
        }
    })
}
function convertGetHeaderResponse(result){
    const logo_image = result[0].logo_image

    return {
        logo_image: logo_image,
        data: mapConverterResult(result)
    }
}

module.exports = {convertGetHeaderResponse}
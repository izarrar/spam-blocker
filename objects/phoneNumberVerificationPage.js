const phoneNumberVerificationPageHeading="//XCUIElementTypeStaticText[@name=\"Verify Your Phone Number\"]"
const phoneNumberFld="//XCUIElementTypeImage[@name=\"phoneIcon2\"]/preceding-sibling::XCUIElementTypeTextField"
const submitYourPhoneNumberBtn="//XCUIElementTypeButton[@name=\"SUBMIT PHONE NUMBER\"]"
const confirmYourNumberAlert="//XCUIElementTypeAlert[@name=\"Confirm Your Number\"]"
const yesDialogBtn="//XCUIElementTypeButton[@name=\"Yes\"]"



class phoneNumberVerificationPage{

    get phone_number_verification_page_heading() {
        return $(phoneNumberVerificationPageHeading);
}

get phone_number_fld() {
        return $(phoneNumberFld);
}

get submit_your_phone_number_btn() {
    return $(submitYourPhoneNumberBtn);
}

get confirm_your_number_alert() {
    return $(confirmYourNumberAlert);
}

get yes_dialog_btn() {
    return $(yesDialogBtn);
}

 }

export default new phoneNumberVerificationPage()   
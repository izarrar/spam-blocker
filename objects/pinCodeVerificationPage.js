const pinCodeVerificationPageHeading="//XCUIElementTypeStaticText[@name=\"Sending verification code by SMS\"]"
const somethingWrongAlert="//XCUIElementTypeAlert[@name=\"Something Wrong\"]"
const OkDialogBtn="//XCUIElementTypeButton[@name=\"Ok\"]"
const skipBtn="//XCUIElementTypeButton[@name=\"Skip\"]"
const selector = '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'



class pinCodeVerificationPage{

    get pin_code_verification_page_heading() {
        return $(pinCodeVerificationPageHeading);
    }

    get pin_fld() {
        const pinFld =$(`-ios class chain:${selector}`)
        return pinFld;
    }

    get something_wrong_alert() {
        return $(somethingWrongAlert);
    }

    get Ok_dialog_btn() {
        return $(OkDialogBtn);
    }

    get skip_btn() {
        return $(skipBtn);
    }



 }

export default new pinCodeVerificationPage()   
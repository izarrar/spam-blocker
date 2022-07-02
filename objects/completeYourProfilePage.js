
const completeYourProfileHeading="//XCUIElementTypeStaticText[@name=\"Complete Your Profile\"]"
const firstNameFld="//XCUIElementTypeStaticText[@name=\"First name\"]/following-sibling::XCUIElementTypeTextField"
const lastNameFld="//XCUIElementTypeStaticText[@name=\"Last name\"]/following-sibling::XCUIElementTypeTextField"
const emailFld="//XCUIElementTypeStaticText[@name=\"Email\"]/following-sibling::XCUIElementTypeTextField"
const continueBtn="//XCUIElementTypeButton[@name=\"CONTINUE\"]"

class completeYourProfilePage{

    get complete_your_profile_heading() {
        return $(completeYourProfileHeading);
    }

    get first_name_fld() {
        return $(firstNameFld);
}

get last_name_fld() {
        return $(lastNameFld);
}

get email_fld() {
    return $(emailFld);
}

get continue_btn() {
    return $(continueBtn);
}


 }

export default new completeYourProfilePage() 
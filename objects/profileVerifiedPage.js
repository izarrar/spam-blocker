const profileVerifiedPageHeading="//XCUIElementTypeStaticText[@name=\"Profile Verified\"]"
const continueBtn="//XCUIElementTypeButton[@name=\"CONTINUE\"]"
const userNameLabel="//XCUIElementTypeStaticText[@name=\"John Doe\"]"



class profileVerifiedPage{

    get profile_verified_page_heading() {
        return $(profileVerifiedPageHeading);
}

get continue_btn() {
        return $(continueBtn);
}

get user_name_lbl() {
    return $(userNameLabel);
}


 }

export default new profileVerifiedPage()